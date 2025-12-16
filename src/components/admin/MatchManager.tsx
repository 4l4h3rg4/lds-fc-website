
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X, Check, Search } from 'lucide-react';

interface Player {
    id: string;
    name: string;
    role: string;
    number: string;
}

interface MatchPlayer {
    player_id: string;
    is_starter: boolean;
    goals: number;
}

interface Match {
    id: string;
    rival: string;
    date: string;
    time: string;
    place: string;
    status: 'NEXT' | 'WON' | 'DRAW' | 'LOST';
    result: string;
    type: string;
    match_players?: any[];
}

export default function MatchManager() {
    const [matches, setMatches] = useState<Match[]>([]);
    const [allPlayers, setAllPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Match>>({
        status: 'NEXT',
        type: 'Amistoso'
    });
    const [selectedPlayers, setSelectedPlayers] = useState<MatchPlayer[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const sortMatches = (unsortedMatches: Match[]) => {
        return [...unsortedMatches].sort((a, b) => {
            // 1. Priority: NEXT status first
            if (a.status === 'NEXT' && b.status !== 'NEXT') return -1;
            if (a.status !== 'NEXT' && b.status === 'NEXT') return 1;

            // 2. Secondary Sort: Date
            const dateA = new Date(`${a.date}T${a.time || '00:00'}`);
            const dateB = new Date(`${b.date}T${b.time || '00:00'}`);

            // If invalid dates (legacy data might be DD/MM), fallback to string comparison or created_at
            if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
                // If pure string comparison for "YYYY-MM-DD" works
                return b.date.localeCompare(a.date);
            }

            if (a.status === 'NEXT') {
                // For upcoming matches, ascending (soonest first)
                return dateA.getTime() - dateB.getTime();
            } else {
                // For past matches, descending (newest first)
                return dateB.getTime() - dateA.getTime();
            }
        });
    };

    const fetchData = async () => {
        setLoading(true);
        const { data: mData } = await supabase.from('matches').select('*, match_players(*)');
        const { data: pData } = await supabase.from('players').select('*').order('number', { ascending: true });

        if (mData) {
            setMatches(sortMatches(mData));
        }
        if (pData) setAllPlayers(pData);
        setLoading(false);
    };

    const formatDateForInput = (dateStr?: string) => {
        if (!dateStr) return '';
        // If already YYYY-MM-DD
        if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) return dateStr;
        // If DD/MM (Legacy) - can't easily convert without year, assumes component will just show empty or let user fix it
        // Or we could default to current year if we wanted to be clever, but safe is better.
        return '';
    };

    const handleEdit = (match: Match) => {
        setFormData({
            rival: match.rival,
            date: match.date,
            time: match.time,
            place: match.place,
            status: match.status,
            result: match.result || '',
            type: match.type
        });

        const currentSquad = match.match_players?.map((mp: any) => ({
            player_id: mp.player_id,
            is_starter: mp.is_starter,
            goals: mp.goals || 0
        })) || [];

        setSelectedPlayers(currentSquad);
        setEditingId(match.id);
        setIsFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Seguro que querés borrar este partido?')) return;
        const { error } = await supabase.from('matches').delete().eq('id', id);
        if (!error) fetchData();
        else alert('Error borrando partido.');
    };

    const togglePlayerSelection = (playerId: string) => {
        if (selectedPlayers.find(p => p.player_id === playerId)) {
            setSelectedPlayers(selectedPlayers.filter(p => p.player_id !== playerId));
        } else {
            setSelectedPlayers([...selectedPlayers, { player_id: playerId, is_starter: false, goals: 0 }]);
        }
    };

    const updatePlayerStats = (playerId: string, field: 'is_starter' | 'goals', value: any) => {
        setSelectedPlayers(selectedPlayers.map(p =>
            p.player_id === playerId ? { ...p, [field]: value } : p
        ));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let matchId = editingId;

            const matchPayload = {
                rival: formData.rival,
                date: formData.date, // Should be YYYY-MM-DD from input type="date"
                time: formData.time,
                place: formData.place,
                status: formData.status,
                result: formData.result || null,
                type: formData.type
            };

            if (editingId) {
                const { error } = await supabase.from('matches').update(matchPayload).eq('id', editingId);
                if (error) throw error;
            } else {
                const { data, error } = await supabase.from('matches').insert([matchPayload]).select();
                if (error) throw error;
                matchId = data[0].id;
            }

            if (!matchId) throw new Error("No Match ID");

            await supabase.from('match_players').delete().eq('match_id', matchId);

            if (selectedPlayers.length > 0) {
                const squadPayload = selectedPlayers.map(p => ({
                    match_id: matchId,
                    player_id: p.player_id,
                    is_starter: p.is_starter,
                    goals: p.goals
                }));
                const { error: squadError } = await supabase.from('match_players').insert(squadPayload);
                if (squadError) throw squadError;
            }

            setIsFormOpen(false);
            setEditingId(null);
            setFormData({ status: 'NEXT', type: 'Amistoso' });
            setSelectedPlayers([]);
            fetchData();
        } catch (error) {
            alert('Error guardando partido');
            console.error(error);
        }
    };

    const openNewMatch = () => {
        // Default to today/now
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const currentTime = now.toTimeString().slice(0, 5);

        setFormData({
            status: 'NEXT',
            type: 'Amistoso',
            date: today,
            time: currentTime,
            place: 'Cancha'
        });
        setSelectedPlayers([]);
        setEditingId(null);
        setIsFormOpen(true);
    }

    if (loading) return <div className="text-white font-mono p-12 text-center animate-pulse">Cargando Partidos...</div>;

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="font-heading text-3xl text-white uppercase">Gestión de Partidos</h2>
                <button
                    onClick={openNewMatch}
                    className="bg-[var(--color-neon-cyan)] text-black font-bold uppercase text-xs px-4 py-2 hover:bg-white transition-colors flex items-center gap-2"
                >
                    <Plus size={16} /> Nuevo Partido
                </button>
            </div>

            {isFormOpen && (
                <div className="bg-[#111] border border-white/20 p-6 rounded-sm mb-8 animate-fade-in shadow-2xl shadow-black/50">
                    <div className="flex justify-between mb-6 border-b border-white/10 pb-4">
                        <h3 className="text-white font-heading text-xl uppercase">{editingId ? 'Editar Partido' : 'Nuevo Partido'}</h3>
                        <button onClick={() => setIsFormOpen(false)} className="text-neutral-500 hover:text-white"><X /></button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 border-b border-white/10">
                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Rival</label>
                                <input
                                    className="w-full bg-black border border-white/20 text-white px-3 py-3 text-sm focus:border-[var(--color-neon-cyan)] outline-none transition-colors placeholder:text-neutral-700"
                                    value={formData.rival || ''}
                                    onChange={e => setFormData({ ...formData, rival: e.target.value })}
                                    required
                                    placeholder="Nombre del rival"
                                />
                            </div>

                            {/* Improved Date Picker */}
                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Fecha</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full bg-black border border-white/20 text-white px-3 py-3 text-sm focus:border-[var(--color-neon-cyan)] outline-none transition-colors cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:invert"
                                        value={formatDateForInput(formData.date)} // Handle format
                                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                                        onClick={(e) => e.currentTarget.showPicker()}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Improved Time Picker */}
                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Hora</label>
                                <div className="relative">
                                    <input
                                        type="time"
                                        className="w-full bg-black border border-white/20 text-white px-3 py-3 text-sm focus:border-[var(--color-neon-cyan)] outline-none transition-colors cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:invert"
                                        value={formData.time || ''}
                                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                                        onClick={(e) => e.currentTarget.showPicker()}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Cancha / Lugar</label>
                                <input
                                    className="w-full bg-black border border-white/20 text-white px-3 py-3 text-sm focus:border-[var(--color-neon-cyan)] outline-none transition-colors"
                                    value={formData.place || ''}
                                    onChange={e => setFormData({ ...formData, place: e.target.value })}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Estado</label>
                                <select
                                    className="w-full bg-black border border-white/20 text-white px-3 py-3 text-sm focus:border-[var(--color-neon-cyan)] outline-none"
                                    value={formData.status}
                                    onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                >
                                    <option value="NEXT">Próximo</option>
                                    <option value="WON">Ganado</option>
                                    <option value="DRAW">Empatado</option>
                                    <option value="LOST">Perdido</option>
                                </select>
                            </div>

                            {formData.status !== 'NEXT' && (
                                <div>
                                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Resultado</label>
                                    <input
                                        className="w-full bg-black border border-white/20 text-white px-3 py-3 text-sm focus:border-[var(--color-neon-cyan)] outline-none transition-colors"
                                        value={formData.result || ''}
                                        onChange={e => setFormData({ ...formData, result: e.target.value })}
                                        placeholder="Ej: 3 - 1"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Tipo</label>
                                <input
                                    className="w-full bg-black border border-white/20 text-white px-3 py-3 text-sm focus:border-[var(--color-neon-cyan)] outline-none transition-colors"
                                    value={formData.type || ''}
                                    onChange={e => setFormData({ ...formData, type: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Sqaud Selection */}
                        <div>
                            <h4 className="text-[var(--color-neon-cyan)] font-mono text-xs uppercase tracking-widest mb-4">Convocados ({selectedPlayers.length})</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                {allPlayers.map(player => {
                                    const isSelected = selectedPlayers.find(p => p.player_id === player.id);
                                    return (
                                        <div key={player.id} className={`p-3 border rounded-sm transition-all select-none ${isSelected ? 'border-[var(--color-neon-cyan)] bg-[var(--color-neon-cyan)]/5' : 'border-white/10 bg-neutral-900/50 hover:border-white/30'}`}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div
                                                    onClick={() => togglePlayerSelection(player.id)}
                                                    className={`w-5 h-5 border cursor-pointer flex items-center justify-center transition-colors ${isSelected ? 'bg-[var(--color-neon-cyan)] border-[var(--color-neon-cyan)] text-black' : 'border-white/30 hover:border-white'}`}
                                                >
                                                    {isSelected && <Check size={14} />}
                                                </div>
                                                <span className={`font-heading text-sm uppercase ${isSelected ? 'text-white' : 'text-neutral-500'}`}>{player.name}</span>
                                            </div>

                                            {isSelected && (
                                                <div className="pl-8 flex items-center gap-4 animate-fade-in">
                                                    <button
                                                        type="button"
                                                        onClick={() => updatePlayerStats(player.id, 'is_starter', !isSelected.is_starter)}
                                                        className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider border transition-colors ${isSelected.is_starter
                                                                ? 'bg-[var(--color-neon-cyan)] text-black border-[var(--color-neon-cyan)] font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                                                                : 'bg-transparent text-neutral-500 border-neutral-700 hover:border-neutral-500'
                                                            }`}
                                                    >
                                                        {isSelected.is_starter ? 'TITULAR' : 'SUPLENTE'}
                                                    </button>

                                                    {formData.status !== 'NEXT' && (
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[10px] font-mono uppercase text-neutral-400">Goles:</span>
                                                            <input
                                                                type="number"
                                                                min="0"
                                                                value={isSelected.goals}
                                                                onChange={(e) => updatePlayerStats(player.id, 'goals', parseInt(e.target.value) || 0)}
                                                                className="w-12 bg-black border border-white/20 text-white text-xs px-1 py-0.5 text-center focus:border-[var(--color-neon-cyan)] outline-none"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flex justify-end pt-4 border-t border-white/10">
                            <button type="submit" className="bg-white text-black font-bold uppercase text-xs px-6 py-3 hover:bg-[var(--color-neon-cyan)] transition-colors flex items-center gap-2 cursor-pointer">
                                <Save size={16} /> Guardar Partido
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List */}
            <div className="space-y-4">
                {matches.map(m => (
                    <div key={m.id} className={`bg-[#111] border p-4 flex flex-col md:flex-row items-center justify-between group transition-colors ${m.status === 'NEXT' ? 'border-[var(--color-neon-cyan)]/30 shadow-[0_0_15px_-5px_var(--color-neon-cyan)]' : 'border-white/10 hover:border-white/30'}`}>
                        <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                            <div className={`w-2 h-12 shrink-0 ${m.status === 'NEXT' ? 'bg-[var(--color-neon-cyan)]' : m.status === 'WON' ? 'bg-green-500' : m.status === 'LOST' ? 'bg-red-500' : 'bg-neutral-500'}`}></div>
                            <div>
                                <p className="font-mono text-xs text-neutral-500 mb-1 flex items-center gap-2">
                                    {m.status === 'NEXT' && <span className="animate-pulse w-2 h-2 rounded-full bg-[var(--color-neon-cyan)]"></span>}
                                    {m.date} - {m.time}
                                </p>
                                <h4 className="text-white font-heading text-xl uppercase">vs {m.rival}</h4>
                                <p className="text-neutral-400 text-xs mt-1">{m.place} • {m.type}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                            <div className="text-center">
                                {m.result ? (
                                    <span className={`font-heading text-2xl ${m.status === 'WON' ? 'text-green-500' : 'text-white'}`}>{m.result}</span>
                                ) : (
                                    <span className="text-[10px] font-mono text-[var(--color-neon-cyan)] uppercase border border-[var(--color-neon-cyan)] px-2 py-1">Próximo</span>
                                )}
                            </div>

                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(m)} className="text-cyan-400 hover:text-cyan-300 p-2 bg-neutral-900 border border-white/10 hover:border-cyan-400/50 transition-colors rounded-sm" title="Editar"><Edit2 size={16} /></button>
                                <button onClick={() => handleDelete(m.id)} className="text-red-500 hover:text-red-400 p-2 bg-neutral-900 border border-white/10 hover:border-red-500/50 transition-colors rounded-sm" title="Eliminar"><Trash2 size={16} /></button>
                            </div>
                        </div>
                    </div>
                ))}

                {matches.length === 0 && !loading && (
                    <div className="text-neutral-500 text-center py-12 border border-white/10 border-dashed rounded-sm">
                        No hay partidos registrados
                    </div>
                )}
            </div>
        </div>
    );
}
