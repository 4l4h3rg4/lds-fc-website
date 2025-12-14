import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { $islandState, $notificationData, type IslandState } from '../../lib/store';
import { Bell, Menu, X, Calendar, MapPin, Shirt, Users, Heart, MessageCircle } from 'lucide-react';

const SPRING_CONFIG = { type: 'spring', stiffness: 350, damping: 30 };

const MENU_ITEMS = [
    { label: 'El Rugido', href: '/', icon: Heart },
    { label: 'MANIFIESTO', href: '/manifiesto', icon: Calendar },
    { label: 'Plantel', href: '/plantel', icon: Users },
    { label: 'Partidos', href: '/partidos', icon: Calendar },
    { label: 'Entrenamientos', href: '/entrenamientos', icon: MapPin },
    { label: 'Comunidad', href: '/comunidad', icon: Users },
    { label: 'Tienda', href: '/tienda', icon: Shirt },
    { label: 'Social', href: '/social', icon: Heart },
    { label: 'Contacto', href: '/contacto', icon: MessageCircle },
];

export default function DynamicIsland() {
    const currentState = useStore($islandState);
    const notification = useStore($notificationData);
    const [isHovered, setIsHovered] = useState(false);
    const [internalExpanded, setInternalExpanded] = useState(false);

    // Logic to determine active state
    // If user clicks expand separately, or if a notification comes in
    const activeState = notification ? 'notification' : (internalExpanded ? 'expanded' : currentState);

    // Toggle menu function
    const toggleMenu = () => setInternalExpanded(!internalExpanded);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center items-start font-sans">
            <motion.div
                layout
                transition={SPRING_CONFIG}
                className="bg-[#1a1a1a] border border-white/10 text-[#e5e5e5] overflow-hidden shadow-2xl relative"
                style={{
                    borderRadius: 32,
                    minWidth: activeState === 'expanded' ? 360 : 180,
                    height: activeState === 'idle' ? 44 : 'auto',
                }}
            >
                <motion.div
                    className="relative w-full h-full flex flex-col items-center justify-between"
                    layout="position"
                >
                    <AnimatePresence mode="wait">
                        {activeState === 'idle' && (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full h-11 flex items-center justify-between px-4 cursor-pointer"
                                onClick={toggleMenu}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">Prox. Partido</span>
                                </div>
                                <span className="text-[10px] text-neutral-500 font-mono">DOM 12:00</span>
                            </motion.div>
                        )}

                        {activeState === 'notification' && notification && (
                            <motion.div
                                key="notification"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="w-full p-4 flex items-center gap-3 cursor-pointer"
                                onClick={() => $notificationData.set(null)}
                            >
                                <div className="h-8 w-8 rounded-full bg-[#22d3ee]/20 flex items-center justify-center text-[var(--color-neon-cyan)]">
                                    <Bell size={16} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold m-0 leading-tight">{notification.title}</h4>
                                    <p className="text-xs text-neutral-400 m-0 leading-tight">{notification.description}</p>
                                </div>
                            </motion.div>
                        )}

                        {activeState === 'expanded' && (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full p-6 flex flex-col gap-4"
                            >
                                <div className="flex justify-between items-center w-full border-b border-white/10 pb-4">
                                    <span className="font-heading text-lg text-[var(--color-neon-cyan)]">MENÚ LDS</span>
                                    <button onClick={toggleMenu} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-2 w-full max-h-[60vh] overflow-y-auto custom-scrollbar">
                                    {MENU_ITEMS.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-[var(--color-neon-cyan)] hover:text-black transition-all group"
                                            onClick={() => setInternalExpanded(false)}
                                        >
                                            <item.icon size={20} className="opacity-70 group-hover:opacity-100" />
                                            <span className="text-xs font-bold uppercase">{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </div>
    );
}
