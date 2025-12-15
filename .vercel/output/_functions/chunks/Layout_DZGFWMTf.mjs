import { e as createComponent, f as createAstro, h as addAttribute, n as renderHead, k as renderComponent, o as renderSlot, r as renderTemplate } from './astro/server_C6pIef4S.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { Bell, X, Heart, Calendar, Users, MapPin, Shirt, MessageCircle } from 'lucide-react';
/* empty css                                  */

const $islandState = atom("idle");
const $notificationData = atom(null);

const SPRING_CONFIG = { type: "spring", stiffness: 350, damping: 30 };
const MENU_ITEMS = [
  { label: "El Rugido", href: "/", icon: Heart },
  { label: "MANIFIESTO", href: "/manifiesto", icon: Calendar },
  { label: "Plantel", href: "/plantel", icon: Users },
  { label: "Partidos", href: "/partidos", icon: Calendar },
  { label: "Entrenamientos", href: "/entrenamientos", icon: MapPin },
  { label: "Comunidad", href: "/comunidad", icon: Users },
  { label: "Tienda", href: "/tienda", icon: Shirt },
  { label: "Contacto", href: "/contacto", icon: MessageCircle }
];
function DynamicIsland() {
  const currentState = useStore($islandState);
  const notification = useStore($notificationData);
  const [isHovered, setIsHovered] = useState(false);
  const [internalExpanded, setInternalExpanded] = useState(false);
  const activeState = notification ? "notification" : internalExpanded ? "expanded" : currentState;
  const toggleMenu = () => setInternalExpanded(!internalExpanded);
  return /* @__PURE__ */ jsx("div", { className: "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center items-start font-sans", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      layout: true,
      transition: SPRING_CONFIG,
      className: "bg-[#1a1a1a] border border-white/10 text-[#e5e5e5] overflow-hidden shadow-2xl relative",
      style: {
        borderRadius: 32,
        minWidth: activeState === "expanded" ? 360 : 180,
        height: activeState === "idle" ? 44 : "auto"
      },
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "relative w-full h-full flex flex-col items-center justify-between",
          layout: "position",
          children: /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
            activeState === "idle" && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "w-full h-11 flex items-center justify-between px-4 cursor-pointer",
                onClick: toggleMenu,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-neutral-300", children: "Prox. Partido" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] text-neutral-500 font-mono", children: "DOM 12:00" })
                ]
              },
              "idle"
            ),
            activeState === "notification" && notification && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
                className: "w-full p-4 flex items-center gap-3 cursor-pointer",
                onClick: () => $notificationData.set(null),
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-[#22d3ee]/20 flex items-center justify-center text-[var(--color-neon-cyan)]", children: /* @__PURE__ */ jsx(Bell, { size: 16 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold m-0 leading-tight", children: notification.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 m-0 leading-tight", children: notification.description })
                  ] })
                ]
              },
              "notification"
            ),
            activeState === "expanded" && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "w-full p-6 flex flex-col gap-4",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full border-b border-white/10 pb-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-heading text-lg text-[var(--color-neon-cyan)]", children: "MENÚ LDS" }),
                    /* @__PURE__ */ jsx("button", { onClick: toggleMenu, className: "p-1 hover:bg-white/10 rounded-full transition-colors", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 w-full max-h-[60vh] overflow-y-auto custom-scrollbar", children: MENU_ITEMS.map((item) => /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: item.href,
                      className: "flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-[var(--color-neon-cyan)] hover:text-black transition-all group",
                      onClick: () => setInternalExpanded(false),
                      children: [
                        /* @__PURE__ */ jsx(item.icon, { size: 20, className: "opacity-70 group-hover:opacity-100" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase", children: item.label })
                      ]
                    },
                    item.href
                  )) })
                ]
              },
              "expanded"
            )
          ] })
        }
      )
    }
  ) });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-[#0f0f0f] text-[#e5e5e5] min-h-screen selection:bg-[#FFD700]/30 selection:text-black"> <!-- Background Noise & Concrete Effect --> <div class="fixed inset-0 z-[-1] h-full w-full bg-[#0f0f0f] bg-noise pointer-events-none"></div> <div class="fixed inset-0 z-[-1] bg-gradient-to-tr from-[#1e1e1e] via-transparent to-black opacity-60"></div> ${renderComponent($$result, "DynamicIsland", DynamicIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/shared/DynamicIsland", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
