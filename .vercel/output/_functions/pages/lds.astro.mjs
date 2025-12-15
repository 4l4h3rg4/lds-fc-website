import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
import { Lock } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Lds = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | Acceso Restringido" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden"> <!-- Background Noise/Texture --> <div class="absolute inset-0 opacity-20 bg-[url('/bg-texture.png')] bg-cover"></div> <!-- Login Container --> <div class="relative z-10 w-full max-w-md p-8 border border-white/10 bg-[#0a0a0a] shadow-2xl"> <!-- Header --> <div class="text-center mb-10"> <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6 border border-white/10"> ${renderComponent($$result2, "Lock", Lock, { "className": "text-[var(--color-neon-cyan)] w-8 h-8" })} </div> <h1 class="font-heading text-3xl text-white uppercase tracking-widest">
Área Restringida
</h1> <p class="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-2">
Solo personal autorizado
</p> </div> <!-- Error Message --> <div id="error-message" class="hidden text-red-500 text-xs font-mono text-center mb-6 bg-red-500/10 p-2 border border-red-500/20"></div> <!-- Form --> <form id="login-form" class="space-y-6"> <div> <label for="email" class="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
Credencial (Email)
</label> <input type="email" id="email" name="email" required class="w-full bg-black border border-white/20 text-white px-4 py-3 font-mono text-sm focus:border-[var(--color-neon-cyan)] focus:outline-none transition-colors" placeholder="admin@lds-fc.com"> </div> <div> <label for="password" class="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
Clave de Acceso
</label> <input type="password" id="password" name="password" required class="w-full bg-black border border-white/20 text-white px-4 py-3 font-mono text-sm focus:border-[var(--color-neon-cyan)] focus:outline-none transition-colors" placeholder="••••••••"> </div> <button type="submit" id="submit-btn" class="w-full bg-[var(--color-neon-cyan)] text-black font-heading uppercase tracking-widest py-3 hover:bg-white transition-colors text-sm">
Ingresar al Búnker
</button> </form> <div class="mt-8 text-center"> <a href="/" class="text-neutral-600 font-mono text-[10px] uppercase hover:text-white transition-colors">
← Volver al sitio público
</a> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/lds.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/lds.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/lds.astro";
const $$url = "/lds";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Lds,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
