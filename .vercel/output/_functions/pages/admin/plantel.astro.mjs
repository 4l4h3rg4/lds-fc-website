import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DZGFWMTf.mjs';
import { ArrowLeft } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Plantel = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin | Plantel" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#050505] pt-24 px-6 pb-20"> <div class="max-w-7xl mx-auto"> <a href="/admin" class="flex items-center text-neutral-500 hover:text-white mb-8 transition-colors font-mono text-xs uppercase tracking-widest gap-2"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16 })} Volver al Panel
</a> ${renderComponent($$result2, "PlayerManager", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/admin/PlayerManager", "client:component-export": "default" })} </div> </main> ` })} ${renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/plantel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/plantel.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/plantel.astro";
const $$url = "/admin/plantel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Plantel,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
