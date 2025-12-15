import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
import { Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const reasons = [
    "Quiero jugar",
    "Quiero alentar",
    "Propuesta comercial",
    "Otro"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#0a0a0a] relative overflow-hidden"> <!-- HEADER --> <div class="relative z-10 mb-12 text-center"> <h1 class="font-graffiti text-7xl md:text-9xl uppercase tracking-tighter leading-none relative inline-block">
CONTACTO
<!-- #LDS_OFFICIAL Sticker --> <div class="absolute -bottom-2 right-0 bg-white text-black font-graffiti text-sm px-2 py-0.5 transform -rotate-3 border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
#LDS_OFFICIAL
</div> </h1> </div> <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"> <!-- FORM COLUMN --> <div class="relative w-full"> <!-- Cyan Background Offset --> <div class="absolute top-4 -right-4 w-full h-full bg-[var(--color-neon-cyan)] -z-10 hidden md:block"></div> <!-- Main Form Card --> <div class="bg-[#050505] border-2 border-white p-8 md:p-12 relative shadow-2xl"> <form class="space-y-8" id="contact-form"> <!-- Name Input --> <div class="space-y-2"> <label class="block font-heading text-white text-xl uppercase tracking-wide">
¿Cuál es tu nombre?
</label> <input id="name-input" type="text" placeholder="Nombre o Apodo" class="w-full bg-[#1a1a1a] border-none text-neutral-300 p-4 font-mono focus:ring-2 focus:ring-[var(--color-neon-cyan)] focus:outline-none placeholder:text-neutral-600" required> </div> <!-- Select Input --> <div class="space-y-2"> <label class="block font-heading text-white text-xl uppercase tracking-wide">
¿Cual es tu motivo?
</label> <div class="relative"> <select id="reason-select" class="w-full bg-[#1a1a1a] border-none text-neutral-300 p-4 font-mono focus:ring-2 focus:ring-[var(--color-neon-cyan)] focus:outline-none appearance-none cursor-pointer"> ${reasons.map((r) => renderTemplate`<option>${r}</option>`)} </select> <!-- Custom Arrow --> <div class="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
▼
</div> </div> </div> <!-- Message Input --> <div class="space-y-2"> <label class="block font-heading text-white text-xl uppercase tracking-wide">
danos más detalles
</label> <textarea id="message-input" rows="4" placeholder="..." class="w-full bg-[#1a1a1a] border-none text-neutral-300 p-4 font-mono focus:ring-2 focus:ring-[var(--color-neon-cyan)] focus:outline-none placeholder:text-neutral-600 resize-none"></textarea> <p id="word-count" class="text-right text-xs text-neutral-500 font-mono">
0 / 500 palabras
</p> </div> <!-- Submit Button --> <button class="w-full bg-[var(--color-neon-cyan)] text-black font-heading text-2xl uppercase py-4 hover:bg-[#22d3ee] transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]">
ENVIAR MENSAJE
</button> </form> </div> </div> <!-- INFO / SIDEBAR COLUMN --> <div class="space-y-8 pt-8 lg:pt-0"> <!-- CONTACT INFO BOX --> <div class="border-2 border-white p-8 md:p-10 relative bg-[#050505] shadow-[0_0_30px_rgba(34,211,238,0.1)]"> <h3 class="font-heading text-3xl text-white uppercase mb-10 tracking-wide">
Otras formas de contacto
</h3> <div class="space-y-8"> <div class="flex items-start gap-6 group"> ${renderComponent($$result2, "Mail", Mail, { "className": "text-white mt-1 w-6 h-6" })} <div> <h4 class="font-bold text-white uppercase tracking-wider mb-1">
EMAIL
</h4> <a href="mailto:contacto@ldsfc.com" class="text-neutral-400 font-mono hover:text-[var(--color-neon-cyan)] transition-colors">
contacto@ldsfc.com
</a> </div> </div> <div class="flex items-start gap-6 group"> ${renderComponent($$result2, "MapPin", MapPin, { "className": "text-white mt-1 w-6 h-6" })} <div> <h4 class="font-bold text-white uppercase tracking-wider mb-1">
DÓNDE ESTAMOS
</h4> <p class="text-neutral-400 font-mono text-[var(--color-neon-cyan)]">
Bajos de Mena, Puente Alto
</p> <p class="text-neutral-600 font-mono text-sm mt-1">
(La ubicación exacta la compartimos por
                                    mensaje)
</p> </div> </div> </div> </div> <!-- REDES BOX --> <div class="border-2 border-[#1a1a1a] p-8 md:p-10 bg-[#0a0a0a]"> <h3 class="font-heading text-3xl text-white uppercase mb-6 tracking-wide">
REDES
</h3> <div class="flex gap-4"> <a href="https://www.instagram.com/lds_fc_25/" target="_blank" class="w-16 h-16 flex items-center justify-center bg-[#1a1a1a] text-white hover:bg-[var(--color-neon-cyan)] hover:text-black transition-all border border-white/10 hover:border-transparent"> ${renderComponent($$result2, "Instagram", Instagram, { "size": 32 })} </a> <a href="https://wa.me/56939268844" target="_blank" class="w-16 h-16 flex items-center justify-center bg-[#1a1a1a] text-white hover:bg-[var(--color-neon-cyan)] hover:text-black transition-all border border-white/10 hover:border-transparent"> ${renderComponent($$result2, "MessageCircle", MessageCircle, { "size": 32 })} </a> </div> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/contacto.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
