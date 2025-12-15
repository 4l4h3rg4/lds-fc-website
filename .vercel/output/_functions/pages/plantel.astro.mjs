import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
import { s as supabase } from '../chunks/supabase_ByF6x00H.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Plantel = createComponent(async ($$result, $$props, $$slots) => {
  const { data: playersData } = await supabase.from("players").select("*");
  const players = playersData || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | El Plantel", "data-astro-cid-nlymcc3a": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-6 pt-32 pb-20" data-astro-cid-nlymcc3a> <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-astro-cid-nlymcc3a> <div data-astro-cid-nlymcc3a> <span class="font-mono text-sm text-[var(--color-neon-cyan)] tracking-widest" data-astro-cid-nlymcc3a>Plantel</span> <h1 class="font-graffiti text-6xl md:text-8xl text-white uppercase mt-2" data-astro-cid-nlymcc3a>
La Familia
</h1> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-nlymcc3a> ${players.map((p) => renderTemplate`<div class="player-card group relative h-[500px] w-full cursor-pointer perspective-1000" data-astro-cid-nlymcc3a> <div class="card-inner relative w-full h-full transition-all duration-700 preserve-3d" data-astro-cid-nlymcc3a> <!-- Front Content --> <div class="absolute inset-0 w-full h-full backface-hidden bg-neutral-900 border border-white/10 overflow-hidden" data-astro-cid-nlymcc3a> <div class="h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500" data-astro-cid-nlymcc3a> <img${addAttribute(p.image || "/logo LDS FC.png", "src")}${addAttribute(p.name, "alt")} class="h-full w-full object-cover" data-astro-cid-nlymcc3a> </div> <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-24" data-astro-cid-nlymcc3a> <span class="text-[var(--color-neon-cyan)] font-mono text-xs tracking-widest uppercase mb-1 block" data-astro-cid-nlymcc3a> ${p.number} </span> <h2 class="font-heading text-3xl text-white uppercase italic leading-none" data-astro-cid-nlymcc3a> ${p.name} </h2> <span class="text-white/60 text-sm font-light mt-1 block" data-astro-cid-nlymcc3a> ${p.role} </span> </div> </div> <!-- Back Content (Revealed on Flip) --> <div class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[var(--color-neon-cyan)] p-8 flex flex-col justify-center items-center text-center border-2 border-black" data-astro-cid-nlymcc3a> <h3 class="font-heading text-4xl text-black uppercase mb-6 drop-shadow-sm" data-astro-cid-nlymcc3a>${p.name}</h3> <div class="space-y-4 font-heading uppercase tracking-wider text-black w-full" data-astro-cid-nlymcc3a> <div class="bg-black/10 py-2 px-4 -rotate-1 rounded-sm" data-astro-cid-nlymcc3a> <span class="block text-xs font-bold opacity-60" data-astro-cid-nlymcc3a>Posición</span> <span class="text-xl font-bold" data-astro-cid-nlymcc3a>${p.role}</span> </div> <div class="bg-black/10 py-2 px-4 rotate-1 rounded-sm" data-astro-cid-nlymcc3a> <span class="block text-xs font-bold opacity-60" data-astro-cid-nlymcc3a>Goles</span> <span class="text-xl font-bold" data-astro-cid-nlymcc3a>12</span> </div> <div class="mt-8 pt-6 border-t border-black/20" data-astro-cid-nlymcc3a> <p class="font-graffiti text-xl leading-tight transform -rotate-2" data-astro-cid-nlymcc3a>
"${p.quote}"
</p> </div> </div> </div> </div> </div>`)} <!-- Postulate Card --> <div class="flex flex-col items-center justify-center p-8 border-2 border-dashed border-white/10 rounded-sm opacity-50 hover:opacity-100 transition-opacity cursor-pointer group h-[500px]" data-astro-cid-nlymcc3a> <span class="text-4xl mb-4 group-hover:scale-110 transition-transform" data-astro-cid-nlymcc3a>➕</span> <span class="font-heading text-xl uppercase text-center text-white" data-astro-cid-nlymcc3a>¿Quieres ser uno?</span> <span class="text-xs font-mono mt-2 text-[var(--color-neon-cyan)]" data-astro-cid-nlymcc3a>POSTÚLATE</span> </div> </div> </main> ${renderScript($$result2, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/plantel.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/plantel.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/plantel.astro";
const $$url = "/plantel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Plantel,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
