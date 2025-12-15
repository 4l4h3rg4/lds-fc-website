import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DZGFWMTf.mjs';
import { ArrowLeft } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Tienda = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin | Tienda" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#050505] pt-24 px-6 pb-20"> <div class="max-w-7xl mx-auto"> <a href="/admin" class="flex items-center text-neutral-500 hover:text-white mb-8 transition-colors font-mono text-xs uppercase tracking-widest gap-2"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16 })} Volver al Panel
</a> ${renderComponent($$result2, "ProductManager", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/components/admin/ProductManager", "client:component-export": "default" })} </div> </main> ` })} ${renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/tienda.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/tienda.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/admin/tienda.astro";
const $$url = "/admin/tienda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tienda,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
