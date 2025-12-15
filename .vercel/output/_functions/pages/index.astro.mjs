import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate, l as renderScript, u as unescapeHTML } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
import { Calendar, MapPin, Clock, Heart, ShoppingBag, Instagram, MessageCircle, Mail, Send } from 'lucide-react';
import 'clsx';
/* empty css                                 */
import { $ as $$Footer } from '../chunks/Footer_5oyS-ok-.mjs';
import { s as supabase } from '../chunks/supabase_ByF6x00H.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$MatchCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MatchCard;
  const {
    variant = "neutral",
    label,
    team1,
    team2,
    score1,
    score2,
    date,
    time,
    location,
    isResult = false,
    rotation = "none"
  } = Astro2.props;
  const borderColor = variant === "cyan" ? "border-[var(--color-neon-cyan)] shadow-[0_4px_20px_rgba(34,211,238,0.15)] bg-[#1a1a1a]" : "border-white/10 bg-[#1a1a1a] shadow-[0_4px_20px_rgba(0,0,0,0.5)]";
  const labelBg = variant === "cyan" ? "bg-[var(--color-neon-cyan)] text-black" : "bg-neutral-800/80 text-white backdrop-blur-sm border border-white/5";
  const scoreColor = "text-[var(--color-neon-cyan)]";
  const rotationClass = rotation === "left" ? "-rotate-2 hover:rotate-0" : rotation === "right" ? "rotate-2 hover:rotate-0" : "";
  const vsColor = variant === "cyan" ? "text-neutral-500" : "text-[var(--color-neon-cyan)]/50";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative p-8 rounded-sm border-2 flex flex-col gap-6 w-full max-w-lg transition-transform duration-300 ${borderColor} ${rotationClass}`, "class")}> <!-- Label Badge --> <div class="absolute -top-4 -left-2 transform -rotate-2"> <span${addAttribute(`px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg ${labelBg}`, "class")} style="clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);"> ${label} </span> </div> <!-- Match ID / Badge Top Right (Mock) --> <div class="absolute top-4 right-4 text-[10px] text-neutral-500 font-mono tracking-tighter opacity-60">
LDS-2025
</div> <div class="flex items-center justify-between mt-6"> <!-- Team 1 --> <div class="flex flex-col items-center text-center w-5/12"> <h3 class="font-heading text-2xl md:text-3xl font-bold uppercase leading-none tracking-tight text-white"> ${team1} </h3> ${isResult && renderTemplate`<span${addAttribute(`font-heading text-7xl font-bold mt-2 leading-none ${scoreColor}`, "class")}> ${score1} </span>`} </div> <!-- VS --> <div${addAttribute(`flex flex-col items-center justify-center w-2/12 font-heading text-4xl italic font-black select-none opacity-40 ${vsColor}`, "class")}> <span>VS</span> </div> <!-- Team 2 --> <div class="flex flex-col items-center text-center w-5/12"> <h3 class="font-heading text-2xl md:text-3xl font-bold uppercase leading-none tracking-tight text-white"> ${team2} </h3> ${isResult && renderTemplate`<span class="font-heading text-7xl font-bold mt-2 leading-none text-white/90"> ${score2} </span>`} </div> </div> <!-- Meta Info --> <div class="flex flex-wrap gap-x-6 gap-y-2 mt-auto text-xs text-neutral-400 font-mono pt-6 border-t border-white/5 items-center justify-center"> <div class="flex items-center gap-2"> ${renderComponent($$result, "Calendar", Calendar, { "size": 12, "className": "text-[var(--color-neon-cyan)]" })} <span>${date} ${time && `\u2014 ${time}`}</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result, "MapPin", MapPin, { "size": 12, "className": "text-[var(--color-neon-cyan)]" })} <span>${location}</span> </div> </div> ${isResult && renderTemplate`<div class="absolute -bottom-5 left-1/2 -translate-x-1/2"> <span class="px-6 py-2 bg-[#0f0f0f] border border-[var(--color-neon-cyan)]/30 text-[var(--color-neon-cyan)] font-bold tracking-[0.2em] text-sm uppercase shadow-xl rounded-full block whitespace-nowrap">
¡Victoria!
</span> </div>`} </div>`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/MatchCard.astro", void 0);

const $$QuoteSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden"> <div class="relative z-10 max-w-4xl"> <span class="font-graffiti block text-2xl mb-6 tracking-[0.2em] uppercase">
Voces del Barrio
</span> <h2 class="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-none mb-8">
"Uno se cae, pero <span class="text-white block md:inline">diez lo levantan."</span> </h2> <!-- Pagination Dots --> <div class="flex items-center justify-center gap-2 mt-8"> <div class="w-1.5 h-1.5 rounded-full bg-neutral-600"></div> <div class="w-1.5 h-1.5 rounded-full bg-neutral-600"></div> <div class="w-8 h-1.5 rounded-full bg-[var(--color-neon-cyan)]"></div> <div class="w-1.5 h-1.5 rounded-full bg-neutral-600"></div> <div class="w-1.5 h-1.5 rounded-full bg-neutral-600"></div> <div class="w-1.5 h-1.5 rounded-full bg-neutral-600"></div> </div> </div> <!-- Background Glow --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_50%)] z-0 pointer-events-none"></div> </section>`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/QuoteSection.astro", void 0);

const $$HomeManifesto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-6 relative overflow-hidden"> <div class="max-w-4xl mx-auto relative z-10"> <!-- Section Header --> <div class="text-center mb-12"> <h2 class="font-graffiti text-3xl md:text-6xl text-white uppercase tracking-wider">
EL MANIFIESTO
</h2> </div> <!-- Content Card --> <div class="relative bg-[#0f0f0f] border border-white/10 p-8 md:p-16 rounded-sm"> <!-- Quote --> <h3 class="font-heading text-2xl md:text-4xl text-[var(--color-neon-cyan)] uppercase tracking-wider mb-8 text-center">
"El que abandona, pierde."
</h3> <!-- Text Content with Fade --> <div class="space-y-6 text-neutral-300 font-light leading-relaxed text-lg text-center relative max-h-[200px] overflow-hidden"> <p>
No nacimos en academias caras ni en canchas perfectas.
<span class="text-[var(--color-neon-cyan)] font-normal">Nacimos en el barro</span>, donde la pelota pica para cualquier lado, y la vida a
                    veces corre en contra.
</p> <p>
Aquí nadie llega por casualidad. Llegamos porque buscábamos
                    un rumbo, un grupo que nos levantara cuando el mundo no lo
                    hacía.
</p> <!-- Fade Overlay --> <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none"></div> </div> <!-- CTA Button --> <div class="text-center mt-8 relative z-20"> <a href="/manifiesto" class="inline-block px-8 py-3 bg-white text-black font-heading uppercase tracking-widest text-sm hover:scale-105 transition-transform">
Seguir Leyendo
</a> </div> <!-- Decorative "RIPPED PAPER" effect bottom (CSS clip-path) --> <!-- Optional subtle detail --> </div> </div> </section>`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/HomeManifesto.astro", void 0);

const $$Astro$2 = createAstro();
const $$HomeSquad = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeSquad;
  const { players } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-6 relative border-t border-white/5 bg-[#0a0a0a]" data-astro-cid-gryq6flu> <div class="max-w-7xl mx-auto" data-astro-cid-gryq6flu> <!-- Section Header --> <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8" data-astro-cid-gryq6flu> <div data-astro-cid-gryq6flu> <h2 class="font-graffiti text-3xl md:text-5xl text-white uppercase tracking-wider mb-2" data-astro-cid-gryq6flu>
LA FAMILIA
</h2> <p class="text-neutral-400 font-mono text-sm uppercase tracking-widest" data-astro-cid-gryq6flu>
Conoce a quienes defienden el escudo.
</p> </div> <a href="/plantel" class="hidden md:inline-flex items-center gap-2 text-[var(--color-neon-cyan)] font-heading uppercase tracking-widest text-sm hover:text-white transition-colors group" data-astro-cid-gryq6flu>
Ver Plantel Completo <span class="group-hover:translate-x-1 transition-transform" data-astro-cid-gryq6flu>→</span> </a> </div> <!-- Squad Grid --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-astro-cid-gryq6flu> ${players.map((p) => renderTemplate`<div class="player-card-home group relative h-[500px] w-full cursor-pointer perspective-1000" data-astro-cid-gryq6flu> <div class="card-inner-home relative w-full h-full transition-all duration-700 preserve-3d" data-astro-cid-gryq6flu> <!-- Front Content --> <div class="absolute inset-0 w-full h-full backface-hidden bg-neutral-900 border border-white/10 overflow-hidden" data-astro-cid-gryq6flu> <div class="h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500" data-astro-cid-gryq6flu> <img${addAttribute(p.image, "src")}${addAttribute(p.name, "alt")} class="h-full w-full object-cover" data-astro-cid-gryq6flu> </div> <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-24" data-astro-cid-gryq6flu> <span class="text-[var(--color-neon-cyan)] font-mono text-xs tracking-widest uppercase mb-1 block" data-astro-cid-gryq6flu> ${p.number} </span> <h3 class="font-heading text-3xl text-white uppercase italic leading-none" data-astro-cid-gryq6flu> ${p.name} </h3> <span class="text-white/60 text-sm font-light mt-1 block" data-astro-cid-gryq6flu> ${p.role} </span> </div> </div> <!-- Back Content (Revealed on Flip) --> <div class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[var(--color-neon-cyan)] p-8 flex flex-col justify-center items-center text-center border-2 border-black" data-astro-cid-gryq6flu> <h3 class="font-heading text-4xl text-black uppercase mb-6 drop-shadow-sm" data-astro-cid-gryq6flu>${p.name}</h3> <div class="space-y-4 font-heading uppercase tracking-wider text-black w-full" data-astro-cid-gryq6flu> <div class="bg-black/10 py-2 px-4 -rotate-1 rounded-sm" data-astro-cid-gryq6flu> <span class="block text-xs font-bold opacity-60" data-astro-cid-gryq6flu>Posición</span> <span class="text-xl font-bold" data-astro-cid-gryq6flu>${p.role}</span> </div> <div class="mt-8 pt-6 border-t border-black/20" data-astro-cid-gryq6flu> <p class="font-graffiti text-xl leading-tight transform -rotate-2" data-astro-cid-gryq6flu>
"${p.quote}"
</p> </div> </div> </div> </div> </div>`)} </div> <div class="text-center md:hidden" data-astro-cid-gryq6flu> <a href="/plantel" class="inline-block px-8 py-3 border border-white text-white font-heading uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors" data-astro-cid-gryq6flu>
CONOCER AL EQUIPO
</a> </div> </div> </section> ${renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/HomeSquad.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/HomeSquad.astro", void 0);

const $$HomeTraining = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-6 relative bg-[#0f0f0f] border-t border-white/5"> <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center"> <!-- Text Side --> <div class="flex-1 text-center lg:text-left"> <h2 class="font-heading text-3xl md:text-5xl text-white uppercase tracking-wider mb-6">
EL TALLER
</h2> <p class="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
"Acá no venimos a pasar el rato. Se corre hasta que el cuerpo
                dice basta, y después se corre un poco más."
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> <a href="/entrenamientos" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-neon-cyan)] text-black font-heading uppercase tracking-widest text-sm hover:bg-white transition-colors"> ${renderComponent($$result, "Clock", Clock, { "size": 16 })} Ver Horarios
</a> </div> </div> <!-- Info Card Side --> <div class="flex-1 w-full max-w-md"> <div class="bg-[#1a1a1a] p-8 border-l-4 border-[var(--color-neon-cyan)] relative shadow-2xl"> <div class="absolute -top-3 -right-3 bg-white text-black px-3 py-1 font-mono text-xs font-bold uppercase transform rotate-3">
Próximo
</div> <h3 class="font-heading text-2xl text-white uppercase mb-6 flex items-center gap-2">
Entrenamiento
</h3> <div class="space-y-4"> <div class="flex items-center justify-between border-b border-white/10 pb-4"> <span class="text-neutral-400 font-mono text-sm">DIA</span> <span class="text-white font-bold uppercase">Martes</span> </div> <div class="flex items-center justify-between border-b border-white/10 pb-4"> <span class="text-neutral-400 font-mono text-sm">HORA</span> <span class="text-[var(--color-neon-cyan)] font-bold font-mono">19:00 HS</span> </div> <div class="flex items-center justify-between"> <span class="text-neutral-400 font-mono text-sm">LUGAR</span> <span class="text-white font-bold uppercase text-right">Parque Norte</span> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/HomeTraining.astro", void 0);

const $$Astro$1 = createAstro();
const $$HomeCommunity = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeCommunity;
  const { story } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-6 relative bg-[url('/bg-texture.png')] bg-cover bg-fixed border-t border-white/5" data-astro-cid-mq4sp77p> <!-- Overlay --> <div class="absolute inset-0 bg-black/90" data-astro-cid-mq4sp77p></div> <div class="max-w-4xl mx-auto relative z-10 text-center" data-astro-cid-mq4sp77p> <h2 class="font-heading text-3xl md:text-5xl text-white uppercase tracking-wider mb-12" data-astro-cid-mq4sp77p>
LA TRIBUNA
</h2> <!-- Featured Story Card --> ${story && renderTemplate`<div class="relative group max-w-2xl mx-auto mb-12" data-astro-cid-mq4sp77p> <!-- Red Pin --> <div class="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full bg-[#E63946] border-2 border-[rgba(0,0,0,0.2)] shadow-md" data-astro-cid-mq4sp77p></div> <!-- Paper --> <div class="bg-[#f0f0f0] p-8 md:p-12 shadow-xl transform rotate-1 transition-transform duration-300 hover:rotate-0 text-left paper-texture" data-astro-cid-mq4sp77p> <p class="font-heading text-xl md:text-2xl text-black leading-normal mb-6 uppercase" data-astro-cid-mq4sp77p>
"${story.body}"
</p> <div class="flex items-center justify-between border-t border-black/10 pt-4" data-astro-cid-mq4sp77p> <span class="font-bold text-black uppercase tracking-wider text-sm" data-astro-cid-mq4sp77p>- ${story.author}</span> <div class="flex items-center gap-2 text-[#E63946] font-bold font-mono text-sm" data-astro-cid-mq4sp77p> ${renderComponent($$result, "Heart", Heart, { "size": 16, "fill": "currentColor", "data-astro-cid-mq4sp77p": true })} ${story.likes || 0} </div> </div> </div> </div>`} <a href="/comunidad" class="inline-block px-8 py-3 border border-white/20 text-white font-heading uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors" data-astro-cid-mq4sp77p>
Ver más historias
</a> </div> </section> `;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/HomeCommunity.astro", void 0);

const $$Astro = createAstro();
const $$HomeStore = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomeStore;
  const { products } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-6 border-t border-white/5 bg-[#050505]"> <div class="max-w-7xl mx-auto"> <!-- Section Header --> <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"> <div> <h2 class="font-graffiti text-3xl md:text-5xl text-white uppercase tracking-wider mb-2">
EL ESTANDARTE
</h2> <p class="text-neutral-400 font-mono text-sm uppercase tracking-widest">
No es ropa. Es identidad.
</p> </div> <a href="/tienda" class="hidden md:inline-flex items-center gap-2 text-[var(--color-neon-cyan)] font-heading uppercase tracking-widest text-sm hover:text-white transition-colors group">
Ver todo <span class="group-hover:translate-x-1 transition-transform">→</span> </a> </div> <!-- Products Grid --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> ${products.map((p) => renderTemplate`<div${addAttribute(p.id, "data-id")} class="home-product-card cursor-pointer bg-[#111] border border-white/5 p-8 flex flex-col group hover:border-[var(--color-neon-cyan)]/30 transition-all duration-300 relative"> ${p.badge && renderTemplate`<div${addAttribute(`absolute -top-3 right-4 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${p.badge.color}`, "class")}> ${p.badge.text} </div>`} <div class="aspect-square bg-[#1a1a1a] flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#222] transition-colors relative overflow-hidden"> ${p.image ? renderTemplate`<img${addAttribute(p.image, "src")}${addAttribute(p.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">` : renderTemplate`${renderComponent($$result, "ShoppingBag", ShoppingBag, { "className": "text-white/20 w-12 h-12 stroke-[1]" })}`} </div> <h3 class="font-heading text-xl text-white uppercase mb-2"> ${p.title} </h3> <div class="mt-auto pt-4 flex items-center justify-between border-t border-white/5"> <span class="font-heading text-xl text-[var(--color-neon-cyan)]"> ${p.price} </span> <button class="buy-button bg-white text-black font-heading uppercase text-xs md:text-sm px-4 py-2 hover:bg-[var(--color-neon-cyan)] transition-colors tracking-wide"${addAttribute(p.title, "data-title")}${addAttribute(p.price, "data-price")}>
LO QUIERO
</button> </div> </div>`)} </div> <!-- Mobile CTA --> <div class="text-center md:hidden"> <a href="/tienda" class="inline-block px-8 py-3 bg-[var(--color-neon-cyan)] text-black font-heading uppercase tracking-widest text-sm hover:bg-white transition-colors">
IR A LA TIENDA
</a> </div> </div> </section> ${renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/HomeStore.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/HomeStore.astro", void 0);

const $$HomeContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-6 relative border-t border-white/5 bg-[#050505]"> <div class="max-w-4xl mx-auto text-center"> <!-- Sticker --> <div class="inline-block mb-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300"> <div class="bg-[var(--color-neon-cyan)] text-black font-graffiti text-2xl px-6 py-2 shadow-[4px_4px_0px_white]">
HABLEMOS CLARO
</div> </div> <h2 class="font-heading text-4xl md:text-6xl text-white uppercase mb-8 tracking-wide">
¿Querés ser parte?
</h2> <p class="text-neutral-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
Seguinos en redes para ver el día a día del barrio, o escribenos si
            tenés alguna propuesta seria.
</p> <!-- Social Buttons --> <div class="flex flex-wrap justify-center gap-6 mb-16"> <a href="https://www.instagram.com/lds_fc_25/" target="_blank" class="group w-16 h-16 bg-[#111] border border-white/10 flex items-center justify-center hover:bg-[var(--color-neon-cyan)] transition-all duration-300" aria-label="Instagram"> ${renderComponent($$result, "Instagram", Instagram, { "className": "text-white group-hover:text-black w-8 h-8 transition-colors" })} </a> <a href="https://wa.me/56939268844" target="_blank" class="group w-16 h-16 bg-[#111] border border-white/10 flex items-center justify-center hover:bg-[var(--color-neon-cyan)] transition-all duration-300" aria-label="WhatsApp"> ${renderComponent($$result, "MessageCircle", MessageCircle, { "className": "text-white group-hover:text-black w-8 h-8 transition-colors" })} </a> <a href="/contacto" class="group w-16 h-16 bg-[#111] border border-white/10 flex items-center justify-center hover:bg-[var(--color-neon-cyan)] transition-all duration-300" aria-label="Contacto"> ${renderComponent($$result, "Mail", Mail, { "className": "text-white group-hover:text-black w-8 h-8 transition-colors" })} </a> </div> <!-- Main CTA --> <div> <a href="/contacto" class="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-heading text-xl uppercase tracking-widest hover:bg-[var(--color-neon-cyan)] hover:scale-105 transition-all duration-300">
Escribenos ${renderComponent($$result, "Send", Send, { "size": 20 })} </a> </div> </div> </section>`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/home/HomeContact.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: playersData } = await supabase.from("players").select("*").limit(3);
  const players = playersData || [];
  const { data: productsData } = await supabase.from("products").select("*, badge:badges(text, color)").limit(3);
  const products = (productsData || []).map((p) => ({
    ...p,
    badge: p.badge
    // Ensure badge structure matches
  }));
  const { data: storiesData } = await supabase.from("stories").select("*").limit(1);
  const featuredStory = storiesData && storiesData.length > 0 ? storiesData[0] : null;
  const { data: matchesData } = await supabase.from("matches").select(
    `
        *,
        match_players (
            is_starter,
            goals,
            player:players (name)
        )
    `
  ).order("created_at", { ascending: false });
  const allMatches = (matchesData || []).map((m) => {
    const starters = [];
    const bench = [];
    if (m.match_players) {
      m.match_players.forEach((mp) => {
        const playerObj = {
          name: mp.player.name,
          goals: mp.goals > 0 ? mp.goals : void 0
        };
        if (mp.is_starter) starters.push(playerObj);
        else bench.push(playerObj);
      });
    }
    return { ...m, squad: { starters, bench } };
  });
  const nextMatch = allMatches.find((m) => m.status === "NEXT");
  const lastMatch = allMatches.find((m) => m.status !== "NEXT");
  return renderTemplate(_a || (_a = __template(["", ' <script type="application/json" id="products-data-home">', "<\/script> ", " "])), renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | El Rugido", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full relative" data-astro-cid-j7pv25f6> <!-- Hero Section --> <div class="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden" data-astro-cid-j7pv25f6> <!-- Background Image --> <div class="absolute inset-0 z-0" data-astro-cid-j7pv25f6> <img src="/bg-hero.png" alt="Hero Background" class="w-full h-full object-cover opacity-80" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-black/60" data-astro-cid-j7pv25f6></div> </div> <!-- Content Z-Index --> <div class="relative z-10 flex flex-col items-center justify-center -mt-20" data-astro-cid-j7pv25f6> <!-- Logo --> <img src="/logo LDS FC.png" alt="LDS FC Logo" class="h-24 md:h-32 mb-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" data-astro-cid-j7pv25f6> <!-- Main Title with Glow and Sticker --> <div class="relative mb-6 text-center" data-astro-cid-j7pv25f6> <h1 class="font-graffiti text-[120px] md:text-[180px] leading-[0.8] tracking-normal text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,0.5)] transform -rotate-2 mix-blend-normal opacity-100" data-astro-cid-j7pv25f6>
L.D.S FC
</h1> </div> <!-- Subtext with bullets --> <div class="flex items-center gap-4 text-[var(--color-neon-cyan)] uppercase tracking-[0.5em] md:tracking-[0.8em] font-light text-xs md:text-sm mb-12" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>El que abandona pierde</span> </div> <!-- Buttons --> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-j7pv25f6> <a href="#plantel" class="px-8 py-3 bg-white text-black font-heading uppercase tracking-widest text-sm hover:scale-105 transition-transform" data-astro-cid-j7pv25f6>
La Familia
</a> <a href="#partidos" class="px-8 py-3 bg-black text-white border border-white font-heading uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors" data-astro-cid-j7pv25f6>
La Fecha
</a> </div> </div> <!-- Bottom Banner (Scrolling) --> <div class="absolute bottom-0 w-full bg-[var(--color-neon-cyan)] text-black py-2 overflow-hidden border-t-2 border-black z-30" data-astro-cid-j7pv25f6> <div class="animate-marquee whitespace-nowrap flex gap-12 font-heading uppercase tracking-widest text-sm font-bold" data-astro-cid-j7pv25f6> <!-- Content duplicated for seamless loop --> <span data-astro-cid-j7pv25f6>+++ EL QUE ABANDONA PIERDE +++ NACIDOS EN EL BARRO +++
						UN CÍRCULO QUE NO SE ROMPE +++ MÁS QUE LOS MINUTOS +++
						SUDOR Y GLORIA +++ LA FAMILIA SE CONSTRUYE +++ SOMOS LOS
						DE SIEMPRE</span> <span data-astro-cid-j7pv25f6>+++ EL QUE ABANDONA PIERDE +++ NACIDOS EN EL BARRO +++
						UN CÍRCULO QUE NO SE ROMPE +++ MÁS QUE LOS MINUTOS +++
						SUDOR Y GLORIA +++ LA FAMILIA SE CONSTRUYE +++ SOMOS LOS
						DE SIEMPRE</span> </div> </div> </div> <!-- Match Section --> <section class="py-24 px-6 md:px-12 relative z-10" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto flex flex-col items-center" data-astro-cid-j7pv25f6> <h2 class="font-graffiti text-xl md:text-6xl uppercase tracking-[0.2em] mb-12" data-astro-cid-j7pv25f6>
LA FECHA
</h2> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full max-w-6xl px-4" data-astro-cid-j7pv25f6> ${lastMatch && renderTemplate`${renderComponent($$result2, "MatchCard", $$MatchCard, { "variant": "neutral", "label": "Ultimo Resultado", "team1": "LDS FC", "team2": lastMatch.rival, "score1": lastMatch.result?.split("-")[0].trim() || "0", "score2": lastMatch.result?.split("-")[1].trim() || "0", "date": lastMatch.date, "location": lastMatch.place, "isResult": true, "rotation": "left", "data-astro-cid-j7pv25f6": true })}`} ${nextMatch && renderTemplate`${renderComponent($$result2, "MatchCard", $$MatchCard, { "variant": "cyan", "label": "Pr\xF3ximo Partido", "team1": "LDS FC", "team2": nextMatch.rival, "date": nextMatch.date, "time": nextMatch.time, "location": nextMatch.place, "rotation": "right", "data-astro-cid-j7pv25f6": true })}`} </div> <div class="mt-12 text-center" data-astro-cid-j7pv25f6> <a href="/partidos" class="inline-block px-8 py-3 bg-transparent border border-white/20 text-white font-heading uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors" data-astro-cid-j7pv25f6>
Ver más partidos
</a> </div> </div> </section> ${renderComponent($$result2, "QuoteSection", $$QuoteSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "HomeManifesto", $$HomeManifesto, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "HomeSquad", $$HomeSquad, { "players": players, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "HomeTraining", $$HomeTraining, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "HomeCommunity", $$HomeCommunity, { "story": featuredStory, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "HomeStore", $$HomeStore, { "products": products, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "HomeContact", $$HomeContact, { "data-astro-cid-j7pv25f6": true })} <!-- PRODUCT DETAIL MODAL --> <div id="product-modal-home" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 hidden opacity-0 transition-opacity duration-300" data-astro-cid-j7pv25f6> <div class="bg-[#111] border border-white/20 p-6 md:p-8 rounded-sm w-full max-w-4xl relative shadow-[0_0_50px_rgba(34,211,238,0.1)] max-h-[90vh] overflow-y-auto flex flex-col md:flex-row gap-8" data-astro-cid-j7pv25f6> <button id="close-modal-home" class="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors z-10" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><path d="M18 6 6 18" data-astro-cid-j7pv25f6></path><path d="m6 6 12 12" data-astro-cid-j7pv25f6></path></svg> </button> <!-- Modal Image --> <div class="w-full md:w-1/2 bg-[#050505] flex items-center justify-center border border-white/5 relative aspect-square md:aspect-auto" data-astro-cid-j7pv25f6> <img id="modal-image-home" src="" alt="" class="w-full h-full object-cover hidden" data-astro-cid-j7pv25f6> <div id="modal-placeholder-home" class="text-white/20" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-astro-cid-j7pv25f6></path><line x1="3" x2="21" y1="6" y2="6" data-astro-cid-j7pv25f6></line><path d="M16 10a4 4 0 0 1-8 0" data-astro-cid-j7pv25f6></path></svg> </div> </div> <!-- Modal Info --> <div class="w-full md:w-1/2 flex flex-col" data-astro-cid-j7pv25f6> <h2 id="modal-title-home" class="font-heading text-3xl md:text-4xl text-white uppercase mb-4 leading-none" data-astro-cid-j7pv25f6></h2> <div class="flex items-center gap-4 mb-6" data-astro-cid-j7pv25f6> <span id="modal-price-home" class="font-heading text-2xl text-[var(--color-neon-cyan)]" data-astro-cid-j7pv25f6></span> <span id="modal-badge-home" class="font-mono text-xs font-bold uppercase tracking-wider px-2 py-1 hidden" data-astro-cid-j7pv25f6></span> </div> <div class="prose prose-invert prose-sm mb-8 flex-1 overflow-y-auto pr-2 max-h-[40vh]" data-astro-cid-j7pv25f6> <p id="modal-description-home" class="font-mono text-neutral-400 whitespace-pre-wrap" data-astro-cid-j7pv25f6></p> </div> <div class="mt-auto pt-6 border-t border-white/5 sticky bottom-0 bg-[#111]" data-astro-cid-j7pv25f6> <button id="modal-buy-button-home" class="w-full bg-white text-black font-heading uppercase text-sm px-6 py-4 hover:bg-[var(--color-neon-cyan)] transition-colors tracking-wide flex items-center justify-center gap-2" data-astro-cid-j7pv25f6>
LO QUIERO
</button> </div> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </main> ` }), unescapeHTML(JSON.stringify(products)), renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/index.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
