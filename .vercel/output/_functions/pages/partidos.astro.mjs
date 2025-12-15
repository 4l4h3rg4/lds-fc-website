import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../chunks/astro/server_C6pIef4S.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZGFWMTf.mjs';
import { Clock, MapPin, ChevronDown } from 'lucide-react';
import { s as supabase } from '../chunks/supabase_ByF6x00H.mjs';
export { renderers } from '../renderers.mjs';

const $$Partidos = createComponent(async ($$result, $$props, $$slots) => {
  const { data: matchesData, error } = await supabase.from("matches").select(
    `
        *,
        match_players (
            is_starter,
            goals,
            player:players (name)
        )
    `
  );
  const formatMatchDate = (dateStr) => {
    if (!dateStr) return "";
    if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const [year, month, day] = dateStr.split("-");
      return `${day}/${month}`;
    }
    return dateStr;
  };
  const rawMatches = (matchesData || []).map((m) => {
    const starters = [];
    const bench = [];
    if (m.match_players) {
      m.match_players.forEach((mp) => {
        const playerObj = {
          name: mp.player.name,
          goals: mp.goals > 0 ? mp.goals : void 0
        };
        if (mp.is_starter) {
          starters.push(playerObj);
        } else {
          bench.push(playerObj);
        }
      });
    }
    return {
      id: m.id,
      type: m.type,
      date: m.date,
      // Keep raw for sorting
      displayDate: formatMatchDate(m.date),
      // Formatted for UI
      time: m.time,
      rival: m.rival,
      place: m.place,
      result: m.result,
      status: m.status,
      squad: {
        starters,
        bench
      }
    };
  });
  const matches = rawMatches.sort((a, b) => {
    if (a.status === "NEXT" && b.status !== "NEXT") return -1;
    if (a.status !== "NEXT" && b.status === "NEXT") return 1;
    const dateA = /* @__PURE__ */ new Date(`${a.date}T${a.time || "00:00"}`);
    const dateB = /* @__PURE__ */ new Date(`${b.date}T${b.time || "00:00"}`);
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      return b.date.localeCompare(a.date);
    }
    if (a.status === "NEXT") {
      return dateA.getTime() - dateB.getTime();
    } else {
      return dateB.getTime() - dateA.getTime();
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LDS FC | Partidos" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-6 pt-32 pb-20"> <h1 class="font-graffiti text-6xl md:text-8xl text-white uppercase mb-16">
Partidos
</h1> <div class="space-y-6"> ${matches.map((m) => renderTemplate`<div${addAttribute(`match-card group relative border ${m.status === "NEXT" ? "border-[var(--color-neon-cyan)] bg-[var(--color-neon-cyan)]/5" : "border-white/10 bg-white/5"} overflow-hidden transition-all hover:border-[var(--color-neon-cyan)]/50 cursor-pointer`, "class")}${addAttribute(m.id, "data-match-id")}>  <div class="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">  <div${addAttribute(`absolute left-0 top-0 bottom-0 w-1 ${m.status === "NEXT" ? "bg-[var(--color-neon-cyan)]" : m.status === "WON" ? "bg-green-500" : m.status === "LOST" ? "bg-red-500" : "bg-neutral-500"}`, "class")}></div> <div class="flex flex-col md:flex-row gap-6 md:items-center min-w-[200px]"> <div class="text-center md:text-left"> <span class="block font-heading text-3xl md:text-4xl text-white"> ${m.displayDate} </span> <span class="block font-mono text-sm text-neutral-500"> ${m.type} </span> </div> <div class="hidden md:block h-10 w-px bg-white/10"></div> <div class="flex items-center gap-2 text-neutral-400"> ${renderComponent($$result2, "Clock", Clock, { "size": 16 })} <span class="font-mono text-sm"> ${m.time} HS
</span> </div> </div> <div class="flex-1 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 w-full"> <span class="font-heading text-2xl md:text-3xl text-white">
LDS FC
</span> <span class="font-mono text-xl text-neutral-600">
VS
</span> <span class="font-heading text-2xl md:text-3xl text-neutral-300"> ${m.rival} </span> </div> <div class="flex flex-col items-end min-w-[150px]"> ${m.result ? renderTemplate`<span class="font-heading text-4xl text-[var(--color-neon-cyan)]"> ${m.result} </span>` : renderTemplate`<span class="font-heading text-xl text-white bg-[var(--color-neon-cyan)]/20 px-3 py-1 rounded-sm border border-[var(--color-neon-cyan)]/30 animate-pulse">
PRÓXIMO
</span>`} <div class="flex items-center gap-1 mt-2 text-neutral-500"> ${renderComponent($$result2, "MapPin", MapPin, { "size": 12 })} <span class="text-[10px] uppercase"> ${m.place} </span> </div> </div> <div class="absolute right-4 bottom-4 md:static md:ml-4 text-white/20 group-hover:text-[var(--color-neon-cyan)] transition-colors"> ${renderComponent($$result2, "ChevronDown", ChevronDown, { "className": "transform transition-transform duration-300 chevron-icon" })} </div> </div>  <div class="match-details grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out border-t border-white/5 bg-black/20"> <div class="overflow-hidden"> <div class="p-6 md:p-8 flex flex-col md:flex-row gap-12">  <div class="flex-1"> <h3 class="font-mono text-[var(--color-neon-cyan)] text-sm tracking-widest uppercase mb-4 opacity-80">
Titulares
</h3> <ul class="space-y-2"> ${m.squad.starters.map((player) => renderTemplate`<li class="flex items-center justify-between text-white border-b border-white/5 pb-2 last:border-0"> <span class="font-heading text-xl uppercase tracking-wide"> ${player.name} </span> ${player.goals && renderTemplate`<span class="flex items-center gap-1 text-[var(--color-neon-cyan)] font-mono text-sm">
⚽ x${player.goals} </span>`} </li>`)} </ul> </div>  <div class="flex-1"> <h3 class="font-mono text-neutral-500 text-sm tracking-widest uppercase mb-4">
Banca
</h3> <ul class="space-y-2"> ${m.squad.bench.map((player) => renderTemplate`<li class="flex items-center justify-between text-neutral-400 border-b border-white/5 pb-2 last:border-0"> <span class="font-heading text-xl uppercase tracking-wide"> ${player.name} </span> ${player.goals && renderTemplate`<span class="flex items-center gap-1 text-[var(--color-neon-cyan)] font-mono text-sm">
⚽ x${player.goals} </span>`} </li>`)} </ul> </div> </div> </div> </div> </div>`)} </div> </main> ${renderScript($$result2, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/partidos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/partidos.astro", void 0);

const $$file = "C:/Users/ficam/Documents/GitHub/lds-fc-website/src/pages/partidos.astro";
const $$url = "/partidos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Partidos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
