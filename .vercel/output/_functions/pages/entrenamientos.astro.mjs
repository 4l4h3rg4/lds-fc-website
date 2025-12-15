import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
import { Clock, AlertTriangle, CheckSquare } from 'lucide-react';
/* empty css                                          */
export { renderers } from '../renderers.mjs';

const $$Entrenamientos = createComponent(($$result, $$props, $$slots) => {
  const galleryImages = [
    "/entrenamiento-1.jpg",
    "/entrenamiento-2.jpg",
    "/entrenamiento-3.jpg",
    "/entrenamiento-4.jpg",
    "/entrenamiento-5.jpg",
    "/entrenamiento-6.jpg"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | El Taller", "data-astro-cid-7ibhuj2z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-32" data-astro-cid-7ibhuj2z> <!-- SECTION 1: HEADER "EL TALLER" --> <section class="text-center relative" data-astro-cid-7ibhuj2z> <div class="relative inline-block" data-astro-cid-7ibhuj2z> <h1 class="font-graffiti text-8xl md:text-[10rem] leading-none text-white uppercase relative z-10 tracking-tighter" data-astro-cid-7ibhuj2z>
EL TALLER
</h1> </div> <div class="border-t border-b border-[var(--color-neon-cyan)] py-2 max-w-2xl mx-auto mt-4 mb-16 relative" data-astro-cid-7ibhuj2z> <h2 class="font-mono text-[var(--color-neon-cyan)] uppercase tracking-[0.2em] text-sm md:text-base" data-astro-cid-7ibhuj2z>
Donde se fabrican guerreros
</h2> </div> <div class="bg-neutral-900 border-l-4 border-[var(--color-neon-cyan)] p-8 md:p-12 max-w-4xl mx-auto text-left relative overflow-hidden shadow-2xl" data-astro-cid-7ibhuj2z> <div class="absolute top-0 right-0 bg-white text-black px-3 py-1 font-mono text-xs font-bold uppercase" data-astro-cid-7ibhuj2z>
Filosofía LDS
</div> <p class="font-heading text-3xl md:text-3xl text-white uppercase leading-tight mb-4" data-astro-cid-7ibhuj2z>
"Acá no venimos a pasar el rato. Se corre hasta que el
                    cuerpo dice basta, y después se corre un poco más."
</p> <p class="font-mono text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl" data-astro-cid-7ibhuj2z>
No buscamos técnica perfecta, buscamos corazones que no se
                    rompan. El talento suma, pero la disciplina multiplica. Si
                    no estás dispuesto a embarrarte, quedate en tu casa mirando
                    la tele.
</p> </div> </section> <!-- SECTION 2: SCHEDULE "LA RUTINA" --> <section data-astro-cid-7ibhuj2z> <div class="flex items-center gap-4 mb-12" data-astro-cid-7ibhuj2z> ${renderComponent($$result2, "Clock", Clock, { "className": "text-[var(--color-neon-cyan)] w-8 h-8 md:w-12 md:h-12", "data-astro-cid-7ibhuj2z": true })} <h2 class="font-heading text-5xl md:text-6xl text-white uppercase" data-astro-cid-7ibhuj2z>
La Rutina
</h2> </div> <div class="grid gap-4" data-astro-cid-7ibhuj2z> <!-- Lunes --> <div class="bg-white/5 border border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group hover:border-[var(--color-neon-cyan)]/30 transition-colors" data-astro-cid-7ibhuj2z> <div class="text-center md:text-left mb-4 md:mb-0" data-astro-cid-7ibhuj2z> <span class="block font-heading text-3xl text-[var(--color-neon-cyan)] uppercase mb-1" data-astro-cid-7ibhuj2z>Lunes</span> <span class="font-mono text-white text-xl" data-astro-cid-7ibhuj2z>19:00 - 21:00</span> </div> <span class="font-heading text-white/50 text-xl uppercase" data-astro-cid-7ibhuj2z>Físico / Resistencia</span> <span class="font-mono text-neutral-500 text-sm" data-astro-cid-7ibhuj2z>Parque Norte</span> </div> <!-- Miércoles --> <div class="bg-white/5 border border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group hover:border-[var(--color-neon-cyan)]/30 transition-colors" data-astro-cid-7ibhuj2z> <div class="text-center md:text-left mb-4 md:mb-0" data-astro-cid-7ibhuj2z> <span class="block font-heading text-3xl text-[var(--color-neon-cyan)] uppercase mb-1" data-astro-cid-7ibhuj2z>Miércoles</span> <span class="font-mono text-white text-xl" data-astro-cid-7ibhuj2z>19:00 - 21:00</span> </div> <span class="font-heading text-white/50 text-xl uppercase" data-astro-cid-7ibhuj2z>Táctico / Espacios Reducidos</span> <span class="font-mono text-neutral-500 text-sm" data-astro-cid-7ibhuj2z>Cancha El Campito</span> </div> <!-- Viernes --> <div class="bg-white/5 border border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group hover:border-[var(--color-neon-cyan)]/30 transition-colors" data-astro-cid-7ibhuj2z> <div class="text-center md:text-left mb-4 md:mb-0" data-astro-cid-7ibhuj2z> <span class="block font-heading text-3xl text-[var(--color-neon-cyan)] uppercase mb-1" data-astro-cid-7ibhuj2z>Viernes</span> <span class="font-mono text-white text-xl" data-astro-cid-7ibhuj2z>20:00 - 22:00</span> </div> <span class="font-heading text-white/50 text-xl uppercase" data-astro-cid-7ibhuj2z>Fútbol Formal / Pelota Parada</span> <span class="font-mono text-neutral-500 text-sm" data-astro-cid-7ibhuj2z>Estadio Municipal</span> </div> </div> <!-- WARNING BOX --> <div class="mt-8 border border-red-900/50 bg-red-900/10 p-6 flex gap-4 items-start rounded-sm" data-astro-cid-7ibhuj2z> ${renderComponent($$result2, "AlertTriangle", AlertTriangle, { "className": "text-red-500 shrink-0 mt-1", "data-astro-cid-7ibhuj2z": true })} <p class="font-mono text-red-200 text-sm" data-astro-cid-7ibhuj2z> <strong class="text-white" data-astro-cid-7ibhuj2z>IMPORTANTE:</strong> Llegar 15 minutos
                    antes. El que llega tarde, paga con 20 flexiones por minuto de
                    demora. Sin excepciones.
</p> </div> </section> <!-- SECTION 3: GALLERY --> <section data-astro-cid-7ibhuj2z> <h2 class="font-heading text-5xl md:text-6xl text-white uppercase mb-12 text-center" data-astro-cid-7ibhuj2z>
En la Sangre
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-7ibhuj2z> ${galleryImages.map((img, i) => renderTemplate`<div class="aspect-square relative overflow-hidden group bg-neutral-800" data-astro-cid-7ibhuj2z>  <div class="w-full h-full bg-neutral-800 flex items-center justify-center text-white/10 group-hover:text-white/30 transition-colors border border-white/5" data-astro-cid-7ibhuj2z> <span class="font-heading text-4xl" data-astro-cid-7ibhuj2z> ${i + 1} </span> </div> <img${addAttribute(img, "src")}${addAttribute(`Entrenamiento ${i + 1}`, "alt")} class="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" onerror="this.style.display='none'" data-astro-cid-7ibhuj2z> </div>`)} </div> </section> <!-- SECTION 4: RECRUITMENT --> <section class="flex justify-center pb-20" data-astro-cid-7ibhuj2z> <div class="bg-[#f0f0f0] text-black p-8 md:p-12 max-w-4xl w-full transform rotate-1 shadow-2xl relative paper-texture" data-astro-cid-7ibhuj2z> <!-- Tape/Pin effect (Optional visual flair) --> <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm rotate-[-2deg]" data-astro-cid-7ibhuj2z></div> <!-- Sticker --> <div class="absolute -right-6 -top-6 bg-[#E63946] text-white p-4 transform rotate-12 shadow-lg z-10" data-astro-cid-7ibhuj2z> <p class="font-graffiti text-lg md:text-xl leading-none text-center" data-astro-cid-7ibhuj2z>
SOLO<br data-astro-cid-7ibhuj2z>PARA<br data-astro-cid-7ibhuj2z>VALIENTES
</p> </div> <div class="flex items-center gap-4 border-b-4 border-black pb-6 mb-8" data-astro-cid-7ibhuj2z> ${renderComponent($$result2, "CheckSquare", CheckSquare, { "size": 48, "className": "stroke-[3]", "data-astro-cid-7ibhuj2z": true })} <h2 class="font-heading text-6xl md:text-7xl uppercase tracking-tighter text-[#E63946]" data-astro-cid-7ibhuj2z>
Reclutamiento
</h2> </div> <div class="grid md:grid-cols-2 gap-12 mb-12" data-astro-cid-7ibhuj2z> <div data-astro-cid-7ibhuj2z> <h3 class="font-bold border-b-2 border-[#E63946] inline-block mb-4 uppercase text-lg" data-astro-cid-7ibhuj2z>
Requisitos Obligatorios:
</h3> <ul class="space-y-3 font-mono text-sm" data-astro-cid-7ibhuj2z> <li class="flex items-start gap-2" data-astro-cid-7ibhuj2z> <span class="block w-1.5 h-1.5 bg-black mt-1.5 rounded-full" data-astro-cid-7ibhuj2z></span>
Compromiso total (faltas sin aviso = fuera).
</li> <li class="flex items-start gap-2" data-astro-cid-7ibhuj2z> <span class="block w-1.5 h-1.5 bg-black mt-1.5 rounded-full" data-astro-cid-7ibhuj2z></span>
Botines propios (no importa la marca).
</li> <li class="flex items-start gap-2" data-astro-cid-7ibhuj2z> <span class="block w-1.5 h-1.5 bg-black mt-1.5 rounded-full" data-astro-cid-7ibhuj2z></span>
Hidratación propia.
</li> <li class="flex items-start gap-2" data-astro-cid-7ibhuj2z> <span class="block w-1.5 h-1.5 bg-black mt-1.5 rounded-full" data-astro-cid-7ibhuj2z></span>
Cuota social al día (si podés, si no lo charlamos).
</li> </ul> </div> <div data-astro-cid-7ibhuj2z> <h3 class="font-bold border-b-2 border-[#E63946] inline-block mb-4 uppercase text-lg" data-astro-cid-7ibhuj2z>
Lo que te espera:
</h3> <p class="font-mono text-sm mb-6" data-astro-cid-7ibhuj2z>
No prometemos titularidad. Prometemos que vas a
                            terminar muerto, pero mejor jugador y mejor persona.
</p> <p class="font-heading text-xl uppercase" data-astro-cid-7ibhuj2z>
¿Te la bancás?
</p> </div> </div> <div class="text-center" data-astro-cid-7ibhuj2z> <a href="/contacto" class="inline-block border-2 border-black px-12 py-4 font-heading text-2xl uppercase hover:bg-black hover:text-white transition-colors tracking-widest" data-astro-cid-7ibhuj2z>
Quiero Probarme
</a> <p class="mt-4 font-mono text-xs text-neutral-500" data-astro-cid-7ibhuj2z>
* Menores de 18 años con autorización de padres o tutor.
</p> </div> </div> </section> </main> ` })} `;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/entrenamientos.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/entrenamientos.astro";
const $$url = "/entrenamientos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Entrenamientos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
