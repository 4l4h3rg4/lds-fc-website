
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Trash2 } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface GalleryItem {
    id: string;
    image_url: string;
}

export default function GalleryManager() {
    const [images, setImages] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        setLoading(true);
        const { data } = await supabase.from('training_gallery').select('*').order('created_at', { ascending: false });
        if (data) setImages(data);
        setLoading(false);
    };

    const handleUpload = async (url: string) => {
        if (!url) return;
        try {
            const { error } = await supabase.from('training_gallery').insert([{ image_url: url }]);
            if (error) throw error;
            fetchImages();
        } catch (error) {
            alert('Error guardando imagen en galería');
            console.error(error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Seguro que querés borrar esta foto?')) return;
        const { error } = await supabase.from('training_gallery').delete().eq('id', id);
        if (!error) fetchImages();
    };

    if (loading) return <div className="text-white font-mono p-12 text-center">Cargando Galería...</div>;

    return (
        <div className="space-y-8">
            <h2 className="font-heading text-3xl text-white uppercase">Gestión de Galería (El Taller)</h2>

            <div className="bg-[#111] border border-white/20 p-6 rounded-sm">
                <h3 className="text-white font-mono uppercase text-sm mb-4">Subir Nueva Foto</h3>
                <div className="max-w-md">
                    <ImageUpload
                        folder="gallery"
                        onUpload={handleUpload}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map(item => (
                    <div key={item.id} className="group relative aspect-square bg-neutral-900 border border-white/10">
                        <img src={item.image_url} alt="Gallery" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>
            {images.length === 0 && <p className="text-neutral-500 font-mono text-xs">No hay imágenes en la galería.</p>}
        </div>
    );
}
