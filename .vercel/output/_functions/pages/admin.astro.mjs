import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | B\xFAnker Admin" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#050505] pt-24 px-6"> <div class="max-w-7xl mx-auto"> <div class="flex items-center justify-between mb-12"> <div> <span class="text-[var(--color-neon-cyan)] font-mono text-xs uppercase tracking-widest">Sistema de Gestión</span> <h1 class="font-heading text-4xl text-white uppercase mt-2">
Panel de Control
</h1> </div> <button id="logout-btn" class="px-6 py-2 border border-red-500/50 text-red-500 font-mono text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors">
Cerrar Sesión
</button> </div> <!-- Dashboard Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Card: Jugadores --> <a href="/admin/plantel" class="block"> <div class="bg-[#111] border border-white/10 p-6 flex flex-col hover:border-[var(--color-neon-cyan)] transition-colors group h-full cursor-pointer"> <h3 class="font-heading text-2xl text-white uppercase mb-2">
Plantel
</h3> <p class="text-neutral-500 text-sm mb-6 flex-1">
Gestionar jugadores, estadísticas y fotos.
</p> <span class="text-xs font-mono text-neutral-600 uppercase group-hover:text-[var(--color-neon-cyan)]">→ Gestionar</span> </div> </a> <!-- Card: Partidos --> <a href="/admin/partidos" class="block"> <div class="bg-[#111] border border-white/10 p-6 flex flex-col hover:border-[var(--color-neon-cyan)] transition-colors group h-full cursor-pointer"> <h3 class="font-heading text-2xl text-white uppercase mb-2">
Partidos
</h3> <p class="text-neutral-500 text-sm mb-6 flex-1">
Actualizar resultados, fixtures y formaciones.
</p> <span class="text-xs font-mono text-neutral-600 uppercase group-hover:text-[var(--color-neon-cyan)]">→ Gestionar</span> </div> </a> <!-- Card: Tienda --> <a href="/admin/tienda" class="block"> <div class="bg-[#111] border border-white/10 p-6 flex flex-col hover:border-[var(--color-neon-cyan)] transition-colors group h-full cursor-pointer"> <h3 class="font-heading text-2xl text-white uppercase mb-2">
Tienda
</h3> <p class="text-neutral-500 text-sm mb-6 flex-1">
Administrar productos, precios y stock.
</p> <span class="text-xs font-mono text-neutral-600 uppercase group-hover:text-[var(--color-neon-cyan)]">→ Gestionar</span> </div> </a> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
