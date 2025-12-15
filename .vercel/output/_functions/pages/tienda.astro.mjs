import { e as createComponent, r as renderTemplate, l as renderScript, u as unescapeHTML, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
import { ShoppingBag } from 'lucide-react';
import { s as supabase } from '../chunks/supabase_ByF6x00H.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Tienda = createComponent(async ($$result, $$props, $$slots) => {
  const { data: productsData } = await supabase.from("products").select(
    `
    *,
    badge:badges (text, color)
  `
  ).order("created_at", { ascending: true });
  const products = (productsData || []).map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    price: p.price,
    image: p.image,
    badge: p.badge
    // relational join returns object or null, matches interface
  }));
  return renderTemplate(_a || (_a = __template(["", ' <script type="application/json" id="products-data">', "<\/script> ", ""])), renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | El Estandarte" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-6 pt-32 pb-20"> <!-- HEADER SECTION --> <div class="text-center mb-24 max-w-4xl mx-auto"> <h1 class="font-graffiti text-6xl md:text-6xl text-white uppercase mb-4 tracking-tighter">
EL ESTANDARTE
</h1> <p class="font-mono text-neutral-400 text-sm md:text-base uppercase tracking-widest mb-12">
No vendemos ropa. Compartimos identidad.
</p> </div> <!-- PRODUCTS GRID --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"> ${products.map((p) => renderTemplate`<div${addAttribute(p.id, "data-id")} class="product-card cursor-pointer bg-[#111] border border-white/5 p-6 md:p-8 flex flex-col group hover:border-[var(--color-neon-cyan)]/30 transition-all duration-300 relative">  ${p.badge && renderTemplate`<div${addAttribute(`absolute -top-3 right-4 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${p.badge.color}`, "class")}> ${p.badge.text} </div>`}  <div class="aspect-square bg-[#1a1a1a] flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#222] transition-colors overflow-hidden relative"> ${p.image ? renderTemplate`<img${addAttribute(p.image, "src")}${addAttribute(p.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">` : renderTemplate`${renderComponent($$result2, "ShoppingBag", ShoppingBag, { "className": "text-white/20 w-12 h-12 stroke-[1]" })}`} </div> <h2 class="font-heading text-2xl text-white uppercase mb-2"> ${p.title} </h2> <p class="font-mono text-xs md:text-sm text-neutral-500 mb-4 leading-relaxed line-clamp-3 flex-1"> ${p.description} </p> <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5"> <span class="font-heading text-2xl text-[var(--color-neon-cyan)]"> ${p.price} </span> <button class="buy-button bg-white text-black font-heading uppercase text-sm px-6 py-2 hover:bg-neutral-200 transition-colors tracking-wide"${addAttribute(p.title, "data-title")}${addAttribute(p.price, "data-price")}>
QUIERO
</button> </div> </div>`)} </div> <!-- FOOTER / PROFIT SECTION --> <div class="text-center py-16 border-t border-white/10 relative overflow-hidden"> <!-- Background Blur Element --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-neon-cyan)]/5 blur-[100px] -z-10 rounded-full"></div> <h3 class="font-heading text-3xl md:text-5xl text-white uppercase mb-4 tracking-wide">
100% de las ganancias vuelven al club
</h3> <p class="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base">
Equipamiento, proyectos sociales. Cada compra es un aporte
                directo a la familia LDS.
</p> </div> </main>  <div id="product-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 hidden opacity-0 transition-opacity duration-300"> <div class="bg-[#111] border border-white/20 p-6 md:p-8 rounded-sm w-full max-w-4xl relative shadow-[0_0_50px_rgba(34,211,238,0.1)] max-h-[90vh] overflow-y-auto flex flex-col md:flex-row gap-8"> <button id="close-modal" class="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors z-10"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> <!-- Modal Image --> <div class="w-full md:w-1/2 bg-[#050505] flex items-center justify-center border border-white/5 relative aspect-square md:aspect-auto"> <img id="modal-image" src="" alt="" class="w-full h-full object-cover hidden"> <div id="modal-placeholder" class="text-white/20"> ${renderComponent($$result2, "ShoppingBag", ShoppingBag, { "className": "w-16 h-16 stroke-[1]" })} </div> </div> <!-- Modal Info --> <div class="w-full md:w-1/2 flex flex-col"> <h2 id="modal-title" class="font-heading text-3xl md:text-4xl text-white uppercase mb-4 leading-none"></h2> <div class="flex items-center gap-4 mb-6"> <span id="modal-price" class="font-heading text-2xl text-[var(--color-neon-cyan)]"></span> <span id="modal-badge" class="font-mono text-xs font-bold uppercase tracking-wider px-2 py-1 hidden"></span> </div> <div class="prose prose-invert prose-sm mb-8 flex-1 overflow-y-auto pr-2 max-h-[40vh]"> <p id="modal-description" class="font-mono text-neutral-400 whitespace-pre-wrap"></p> </div> <div class="mt-auto pt-6 border-t border-white/5 sticky bottom-0 bg-[#111]"> <button id="modal-buy-button" class="w-full bg-white text-black font-heading uppercase text-sm px-6 py-4 hover:bg-[var(--color-neon-cyan)] transition-colors tracking-wide flex items-center justify-center gap-2">
LO QUIERO
</button> </div> </div> </div> </div> ` }), unescapeHTML(JSON.stringify(products)), renderScript($$result, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/tienda.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/tienda.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/tienda.astro";
const $$url = "/tienda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tienda,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
