import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
import { Heart, MessageSquare } from 'lucide-react';
import { s as supabase } from '../chunks/supabase_ByF6x00H.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Comunidad = createComponent(async ($$result, $$props, $$slots) => {
  const { data: storiesData } = await supabase.from("stories").select("*");
  const stories = storiesData || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | La Tribuna", "data-astro-cid-odsppser": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-6 pt-32 pb-20 overflow-hidden" data-astro-cid-odsppser> <!-- HEADER SECTION --> <div class="relative mb-24 text-center" data-astro-cid-odsppser> <!-- Foreground "LA TRIBUNA" --> <div class="relative z-10 inline-block" data-astro-cid-odsppser> <h1 class="font-graffiti md:text-9xl leading-none uppercase tracking-tighter relative" data-astro-cid-odsppser>
LA TRIBUNA
</h1> <!-- #LDS_OFFICIAL Sticker --> <div class="absolute -bottom-4 right-0 md:-right-12 bg-white text-black font-graffiti text-lg md:text-xl px-4 py-1 transform -rotate-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]" data-astro-cid-odsppser>
#LDS_OFFICIAL
</div> </div> </div> <!-- MURO DE LOS LAMENTOS SECTION --> <section class="max-w-4xl mx-auto relative" data-astro-cid-odsppser> <!-- CARDS GRID --> <div class="space-y-12" data-astro-cid-odsppser> ${stories.map((s) => renderTemplate`<div class="relative group" data-astro-cid-odsppser> <!-- Red Pin --> <div class="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full bg-[#E63946] border-2 border-[rgba(0,0,0,0.2)] shadow-md" data-astro-cid-odsppser></div> <!-- Paper Card --> <div class="bg-[#f0f0f0] p-8 md:p-10 shadow-xl transform transition-transform duration-300 hover:scale-[1.01] hover:rotate-1 relative z-10 paper-texture box-shadow-paper" data-astro-cid-odsppser> <p class=" text-2xl md:text-3xl text-black leading-normal mb-8 uppercase" data-astro-cid-odsppser>
"${s.body}"
</p> <div class="flex items-center justify-between border-t border-black/10 pt-4" data-astro-cid-odsppser> <span class="font-heading text-xl text-black uppercase" data-astro-cid-odsppser> ${s.author} </span> <div class="flex items-center gap-2 text-[#E63946] font-bold font-mono" data-astro-cid-odsppser> ${renderComponent($$result2, "Heart", Heart, { "size": 18, "fill": "currentColor", "data-astro-cid-odsppser": true })} <span data-astro-cid-odsppser>${s.likes || 0}</span> </div> </div> </div> </div>`)} </div> <!-- CREATE POST BUTTON --> <div class="mt-20 flex justify-center" data-astro-cid-odsppser> <a href="#post" class="group relative inline-block" data-astro-cid-odsppser> <div class="absolute inset-0 bg-[var(--color-neon-cyan)] transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" data-astro-cid-odsppser></div> <div class="relative bg-black border-2 border-[var(--color-neon-cyan)] px-8 py-4 flex items-center gap-4" data-astro-cid-odsppser> ${renderComponent($$result2, "MessageSquare", MessageSquare, { "className": "text-[var(--color-neon-cyan)]", "data-astro-cid-odsppser": true })} <span class="font-heading text-2xl text-white uppercase" data-astro-cid-odsppser>Dejar mi mensaje</span> </div> </a> </div> </section> </main> ` })} `;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/comunidad.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/comunidad.astro";
const $$url = "/comunidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Comunidad,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
