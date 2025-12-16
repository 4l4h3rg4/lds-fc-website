
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface Player {
    id: string;
    name: string;
    role: string;
    number: string;
    quote: string;
    image: string;
}

export default function PlayerManager() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Player>>({});
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetchPlayers();
    }, []);

    const fetchPlayers = async () => {
        setLoading(true);
        const { data } = await supabase.from('players').select('*').order('number', { ascending: true });
        if (data) setPlayers(data);
        setLoading(false);
    };

    const handleEdit = (player: Player) => {
        setFormData(player);
        setEditingId(player.id);
        setIsFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Seguro que querés borrar a este jugador?')) return;
        const { error } = await supabase.from('players').delete().eq('id', id);
        if (!error) fetchPlayers();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingId) {
                const { error } = await supabase.from('players').update(formData).eq('id', editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('players').insert([formData]);
                if (error) throw error;
            }
            setIsFormOpen(false);
            setEditingId(null);
            setFormData({});
            fetchPlayers();
        } catch (error) {
            alert('Error guardando jugador');
            console.error(error);
        }
    };

    const openNewResult = () => {
        setFormData({});
        setEditingId(null);
        setIsFormOpen(true);
    }

    if (loading) return <div className="text-white font-mono p-12 text-center">Cargando Plantel...</div>;

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="font-heading text-3xl text-white uppercase">Gestión de Plantel</h2>
                <button
                    onClick={openNewResult}
                    className="bg-[var(--color-neon-cyan)] text-black font-bold uppercase text-xs px-4 py-2 hover:bg-white transition-colors flex items-center gap-2"
                >
                    <Plus size={16} /> Nuevo Jugador
                </button>
            </div>

            {isFormOpen && (
                <div className="bg-[#111] border border-white/20 p-6 rounded-sm mb-8 animate-fade-in">
                    <div className="flex justify-between mb-6">
                        <h3 className="text-white font-heading text-xl uppercase">{editingId ? 'Editar Jugador' : 'Nuevo Jugador'}</h3>
                        <button onClick={() => setIsFormOpen(false)} className="text-neutral-500 hover:text-white"><X /></button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Nombre</label>
                                <input
                                    className="w-full bg-black border border-white/20 text-white px-4 py-2 focus:border-[var(--color-neon-cyan)]"
                                    value={formData.name || ''}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Posición</label>
                                <input
                                    className="w-full bg-black border border-white/20 text-white px-4 py-2 focus:border-[var(--color-neon-cyan)]"
                                    value={formData.role || ''}
                                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Número</label>
                                <input
                                    className="w-full bg-black border border-white/20 text-white px-4 py-2 focus:border-[var(--color-neon-cyan)]"
                                    value={formData.number || ''}
                                    onChange={e => setFormData({ ...formData, number: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Frase</label>
                                <input
                                    className="w-full bg-black border border-white/20 text-white px-4 py-2 focus:border-[var(--color-neon-cyan)]"
                                    value={formData.quote || ''}
                                    onChange={e => setFormData({ ...formData, quote: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Foto</label>
                            <div className="max-w-xs">
                                <ImageUpload
                                    folder="players"
                                    currentImage={formData.image}
                                    onUpload={(url) => setFormData({ ...formData, image: url })}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button type="submit" className="bg-white text-black font-bold uppercase text-xs px-6 py-3 hover:bg-[var(--color-neon-cyan)] transition-colors flex items-center gap-2">
                                <Save size={16} /> Guardar Jugador
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map(player => (
                    <div key={player.id} className="bg-[#111] border border-white/10 p-5 group hover:border-[var(--color-neon-cyan)]/30 transition-all duration-300 flex flex-col">
                        <div className="w-full aspect-square bg-neutral-800 mb-4 overflow-hidden relative">
                            {player.image ? (
                                <img src={player.image} alt={player.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-600 font-bold">?</div>
                            )}
                            <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 border border-white/10">
                                <span className="text-[var(--color-neon-cyan)] font-mono text-xs font-bold">#{player.number}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-white font-heading text-xl uppercase truncate flex-1 pr-2">{player.name}</h4>
                        </div>

                        <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider mb-2">{player.role}</p>

                        {player.quote && (
                            <p className="text-neutral-500 text-sm italic line-clamp-2 h-10 mb-4">"{player.quote}"</p>
                        )}

                        <div className="flex items-center justify-end mt-auto pt-4 border-t border-white/5 gap-2">
                            <button
                                onClick={() => handleEdit(player)}
                                className="bg-[#222] hover:bg-white hover:text-black text-white p-2 transition-colors border border-white/10"
                                title="Editar"
                            >
                                <Edit2 size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(player.id)}
                                className="bg-[#222] hover:bg-red-600 hover:text-white text-white p-2 transition-colors border border-white/10"
                                title="Eliminar"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
