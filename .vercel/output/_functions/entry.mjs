import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DmsVDpM5.mjs';
import { manifest } from './manifest_CwoNg2QN.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/entrenamientos.astro.mjs');
const _page2 = () => import('./pages/admin/partidos.astro.mjs');
const _page3 = () => import('./pages/admin/plantel.astro.mjs');
const _page4 = () => import('./pages/admin/tienda.astro.mjs');
const _page5 = () => import('./pages/admin.astro.mjs');
const _page6 = () => import('./pages/comunidad.astro.mjs');
const _page7 = () => import('./pages/contacto.astro.mjs');
const _page8 = () => import('./pages/entrenamientos.astro.mjs');
const _page9 = () => import('./pages/lds.astro.mjs');
const _page10 = () => import('./pages/manifiesto.astro.mjs');
const _page11 = () => import('./pages/partidos.astro.mjs');
const _page12 = () => import('./pages/plantel.astro.mjs');
const _page13 = () => import('./pages/tienda.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.5_@types+node@25_2ca37c6e545f532509afb5485f2b2c12/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/entrenamientos.astro", _page1],
    ["src/pages/admin/partidos.astro", _page2],
    ["src/pages/admin/plantel.astro", _page3],
    ["src/pages/admin/tienda.astro", _page4],
    ["src/pages/admin/index.astro", _page5],
    ["src/pages/comunidad.astro", _page6],
    ["src/pages/contacto.astro", _page7],
    ["src/pages/entrenamientos.astro", _page8],
    ["src/pages/lds.astro", _page9],
    ["src/pages/manifiesto.astro", _page10],
    ["src/pages/partidos.astro", _page11],
    ["src/pages/plantel.astro", _page12],
    ["src/pages/tienda.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e3c9118a-f18a-43b2-9cda-721e379c6b79",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
