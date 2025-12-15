
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface Badge {
    id: string;
    text: string;
    color: string;
}

interface Product {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    badge_id?: string;
    badge?: Badge; // nested from query
}

export default function ProductManager() {
    const [products, setProducts] = useState<Product[]>([]);
    const [badges, setBadges] = useState<Badge[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Product>>({});
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data: pData } = await supabase.from('products').select('*, badge:badges(text,color)').order('created_at', { ascending: false });
        const { data: bData } = await supabase.from('badges').select('*');

        if (pData) setProducts(pData);
        if (bData) setBadges(bData);
        setLoading(false);
    };

    const handleEdit = (product: Product) => {
        setFormData({
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image,
            badge_id: product.badge_id
        });
        setEditingId(product.id);
        setIsFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Seguro que querés borrar este producto?')) return;
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (!error) fetchData();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Remove nested object if present before sending payload
            // formatting payload
            const payload = {
                title: formData.title,
                description: formData.description,
                price: formData.price,
                image: formData.image,
                badge_id: formData.badge_id || null // handle empty string as null
            };

            if (editingId) {
                const { error } = await supabase.from('products').update(payload).eq('id', editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('products').insert([payload]);
                if (error) throw error;
            }
            setIsFormOpen(false);
            setEditingId(null);
            setFormData({});
            fetchData();
        } catch (error) {
            alert('Error guardando producto');
            console.error(error);
        }
    };

    const openNewResult = () => {
        setFormData({});
        setEditingId(null);
        setIsFormOpen(true);
    }

    if (loading) return <div className="text-white font-mono p-12 text-center">Cargando Tienda...</div>;

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="font-heading text-3xl text-white uppercase">Gestión de Tienda</h2>
                <button
                    onClick={openNewResult}
                    className="bg-[var(--color-neon-cyan)] text-black font-bold uppercase text-xs px-4 py-2 hover:bg-white transition-colors flex items-center gap-2"
                >
                    <Plus size={16} /> Nuevo Producto
                </button>
            </div>

            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="bg-[#111] border border-white/20 p-6 md:p-8 rounded-sm w-full max-w-4xl relative shadow-[0_0_50px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between mb-6">
                            <h3 className="text-white font-heading text-2xl uppercase">
                                {editingId ? "Editar Producto" : "Nuevo Producto"}
                            </h3>
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="text-neutral-500 hover:text-white p-2"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                                        Título
                                    </label>
                                    <input
                                        className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-[var(--color-neon-cyan)] outline-none"
                                        value={formData.title || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                title: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                                        Descripción
                                    </label>
                                    <textarea
                                        className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-[var(--color-neon-cyan)] h-24 outline-none resize-none"
                                        value={formData.description || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                description: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                                        Precio
                                    </label>
                                    <input
                                        className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-[var(--color-neon-cyan)] outline-none"
                                        value={formData.price || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                price: e.target.value,
                                            })
                                        }
                                        required
                                        placeholder="$10.000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                                        Etiqueta (Badge)
                                    </label>
                                    <select
                                        className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-[var(--color-neon-cyan)] outline-none"
                                        value={formData.badge_id || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                badge_id: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="">Sin etiqueta</option>
                                        {badges.map((b) => (
                                            <option key={b.id} value={b.id}>
                                                {b.text}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                                    Foto
                                </label>
                                <div className="max-w-xs">
                                    <ImageUpload
                                        folder="products"
                                        currentImage={formData.image}
                                        onUpload={(url) =>
                                            setFormData({ ...formData, image: url })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end pt-4 pb-2 border-t border-white/10 sticky bottom-0 bg-[#111] z-10 shadow-[0_-20px_30px_rgba(0,0,0,0.5)]">
                                <button
                                    type="button"
                                    onClick={() => setIsFormOpen(false)}
                                    className="mr-4 text-white font-bold uppercase text-xs px-6 py-3 hover:text-neutral-300 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-white text-black font-bold uppercase text-xs px-8 py-3 hover:bg-[var(--color-neon-cyan)] transition-colors flex items-center gap-2 shadow-lg"
                                >
                                    <Save size={18} /> Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-[#111] border border-white/10 p-5 group hover:border-[var(--color-neon-cyan)]/30 transition-all duration-300 flex flex-col"
                    >
                        <div className="w-full aspect-square bg-neutral-800 mb-4 overflow-hidden relative">
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-600 font-bold">
                                    SIN FOTO
                                </div>
                            )}
                            {product.badge && (
                                <span
                                    className={`absolute top-2 right-2 px-2 py-1 text-[10px] uppercase font-bold text-black bg-[var(--color-neon-cyan)]`}
                                >
                                    {product.badge.text}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-white font-heading text-lg uppercase truncate flex-1 pr-2">
                                {product.title}
                            </h4>
                        </div>
                        <p className="text-neutral-500 text-sm mb-4 line-clamp-2 h-10 flex-1">
                            {product.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                            <p className="text-[var(--color-neon-cyan)] font-heading text-xl">
                                {product.price}
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(product)}
                                    className="bg-[#222] hover:bg-white hover:text-black text-white p-2 transition-colors border border-white/10"
                                    title="Editar"
                                >
                                    <Edit2 size={18} />
                                </button>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="bg-[#222] hover:bg-red-600 hover:text-white text-white p-2 transition-colors border border-white/10"
                                    title="Eliminar"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
