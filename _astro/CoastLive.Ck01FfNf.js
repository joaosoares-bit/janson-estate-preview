import{j as a}from"./jsx-runtime.u17CrQMm.js";import{r as b}from"./index.CO9X3OiW.js";const M=[{slug:"marbella",name:"Marbella",lat:36.51,lon:-4.88},{slug:"estepona",name:"Estepona",lat:36.427,lon:-5.147},{slug:"benahavis",name:"Benahavís",lat:36.52,lon:-5.05},{slug:"mijas",name:"Mijas",lat:36.596,lon:-4.637},{slug:"sotogrande",name:"Sotogrande",lat:36.284,lon:-5.291},{slug:"fuengirola-nerja",name:"Fuengirola · Nerja",lat:36.62,lon:-4.5}],L={en:{tabsAria:"Choose a town",sea:"SEA",uv:"UV",wind:"WIND",windUnit:"KM/H",live:"Live",snapshotLabel:"Snapshot",forecastAria:"Five-day forecast",attrLive:"Live: MET Norway (CC BY 4.0)",attrSea:"Sea/UV: Open-Meteo",liveHref:"https://www.met.no/",hi:"H",lo:"L",cond:{clear:"Clear",fair:"Fair",partly:"Partly cloudy",cloudy:"Cloudy",fog:"Fog",rain:"Rain",snow:"Snow",storm:"Thunderstorm"},tag:"en-GB"},nl:{tabsAria:"Kies een plaats",sea:"ZEE",uv:"UV",wind:"WIND",windUnit:"KM/U",live:"Actueel",snapshotLabel:"Momentopname",forecastAria:"Vijfdaagse verwachting",attrLive:"Actueel: MET Norway (Engelstalig) · CC BY 4.0",attrSea:"Zee/UV: Open-Meteo (Engelstalig)",liveHref:"https://www.met.no/en",hi:"Max",lo:"Min",cond:{clear:"Helder",fair:"Vrijwel helder",partly:"Half bewolkt",cloudy:"Bewolkt",fog:"Mist",rain:"Regen",snow:"Sneeuw",storm:"Onweer"},tag:"nl"},es:{tabsAria:"Elija una localidad",sea:"MAR",uv:"UV",wind:"VIENTO",windUnit:"KM/H",live:"En vivo",snapshotLabel:"Instantánea",forecastAria:"Previsión a cinco días",attrLive:"En vivo: MET Norway (en inglés) · CC BY 4.0",attrSea:"Mar/UV: Open-Meteo (en inglés)",liveHref:"https://www.met.no/en",hi:"Máx",lo:"Mín",cond:{clear:"Despejado",fair:"Casi despejado",partly:"Parcialmente nublado",cloudy:"Nublado",fog:"Niebla",rain:"Lluvia",snow:"Nieve",storm:"Tormenta"},tag:"es"}},H={clear:"M11 6.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zM11 1v3M11 18v3M1 11h3M18 11h3M4 4l2 2M16 16l2 2M18 4l-2 2M6 16l-2 2",cloud:"M6 16h9a3.5 3.5 0 0 0 .3-7A5 5 0 0 0 6 10.5 3 3 0 0 0 6 16z",fog:"M3 8h14M2 12h16M4 16h12",rain:"M6 12h9a3.5 3.5 0 0 0 .3-7A5 5 0 0 0 6 6.5 3 3 0 0 0 6 12zM7 15l-1 3M11 15l-1 3M15 15l-1 3",snow:"M11 3v16M4 7l14 8M18 7L4 15",storm:"M6 11h9a3.5 3.5 0 0 0 .3-7A5 5 0 0 0 6 5.5 3 3 0 0 0 6 11zM11 13l-2 4h3l-2 4"},O={clear:"clear",fair:"clear",partly:"cloud",cloudy:"cloud",fog:"fog",rain:"rain",snow:"snow",storm:"storm"};function D(e){return e===0?"clear":e===1?"fair":e===2?"partly":e===3?"cloudy":e===45||e===48?"fog":e>=51&&e<=67?"rain":e>=71&&e<=77?"snow":e>=80&&e<=82?"rain":e===85||e===86?"snow":e>=95&&e<=99?"storm":"clear"}function E(e){const n=e.split("_")[0]??"";return n.includes("thunder")?"storm":n.includes("sleet")||n.includes("snow")?"snow":n.includes("rain")||n.includes("drizzle")?"rain":n==="fog"?"fog":n==="cloudy"?"cloudy":n==="partlycloudy"?"partly":n==="fair"?"fair":"clear"}const z="je-wx-",F=1800*1e3,h=e=>typeof e=="number"&&Number.isFinite(e);function R(e){try{const n=sessionStorage.getItem(z+e);if(!n)return null;const t=JSON.parse(n);if(!t||!h(t.fetchedAt)||Date.now()-t.fetchedAt>F)return null;const r=t.live;return!r||!h(r.tempC)||!h(r.windKmh)||typeof r.cond!="string"||!Array.isArray(r.days)?null:r}catch{return null}}function V(e,n){try{sessionStorage.setItem(z+e,JSON.stringify({live:n,fetchedAt:Date.now()}))}catch{}}function B(e){const n=e?.properties?.timeseries;if(!Array.isArray(n)||n.length===0)throw new Error("shape");const t=n[0]?.data,r=t?.instant?.details?.air_temperature,y=t?.instant?.details?.wind_speed,g=t?.next_1_hours?.summary?.symbol_code??t?.next_6_hours?.summary?.symbol_code??"clearsky";if(!h(r)||!h(y))throw new Error("shape");const p=new Map;for(const c of n){const i=c?.time??"",m=i.slice(0,10);if(m.length!==10)continue;const u=c?.data?.instant?.details?.air_temperature;if(!h(u))continue;const d=p.get(m)??{hi:u,lo:u,noonSymbol:null};d.hi=Math.max(d.hi,u),d.lo=Math.min(d.lo,u),i.slice(11,13)==="12"&&(d.noonSymbol=c?.data?.next_6_hours?.summary?.symbol_code??c?.data?.next_1_hours?.summary?.symbol_code??d.noonSymbol),p.set(m,d)}const v=n[0].time.slice(0,10),s=p.get(v)??null,l=[];for(const[c,i]of p)if(!(c===v||i.noonSymbol===null)&&(l.push({iso:c,cond:E(i.noonSymbol),hi:Math.round(i.hi),lo:Math.round(i.lo)}),l.length===5))break;return{tempC:Math.round(r),windKmh:Math.round(y*3.6),cond:E(g),todayHi:s?Math.round(s.hi):null,todayLo:s?Math.round(s.lo):null,days:l}}function _({cond:e,size:n=22}){return a.jsx("svg",{viewBox:"0 0 22 22",width:n,height:n,fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:a.jsx("path",{d:H[O[e]]})})}function Y({locale:e,snapshot:n}){const t=L[e]??L.en,[r,y]=b.useState(M[0].slug),[g,p]=b.useState({}),v=b.useRef(null);b.useEffect(()=>{const o=M.find(x=>x.slug===r);if(!o||g[r])return;const C=R(r);if(C){p(x=>({...x,[r]:C}));return}let S=!1;v.current?.abort();const w=new AbortController;v.current=w;const A=setTimeout(()=>w.abort(),6e3);return(async()=>{try{const $=await(await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${o.lat}&lon=${o.lon}`,{signal:w.signal})).json(),k=B($);S||(p(U=>({...U,[r]:k})),V(r,k))}catch{}finally{clearTimeout(A)}})(),()=>{S=!0,clearTimeout(A),w.abort()}},[r,g]);const s=n?.find(o=>o.slug===r)??null,l=g[r]??null,c=l?l.tempC:s?s.tempC:null,i=l?l.cond:s?D(s.code):null,m=l?.todayHi??s?.hiC??null,u=l?.todayLo??s?.loC??null,d=s?.seaC??null,j=s?.uvMax??null,N=l?l.windKmh:null,I=new Intl.DateTimeFormat(t.tag,{weekday:"short",timeZone:"UTC"}),T=o=>{try{return(I.format(new Date(`${o}T12:00:00Z`)).charAt(0)||"·").toUpperCase()}catch{return"·"}},f=[];return d!==null&&f.push(`${t.sea} ${d}°`),j!==null&&f.push(`${t.uv} ${j}`),N!==null&&f.push(`${t.wind} ${N} ${t.windUnit}`),m!==null&&u!==null&&f.push(`${t.hi} ${m}° / ${t.lo} ${u}°`),a.jsxs("div",{className:"cl","data-live":l?"true":"false",children:[a.jsx("div",{className:"cl-tabs",role:"group","aria-label":t.tabsAria,children:M.map(o=>a.jsx("button",{type:"button",className:"cl-tab","aria-pressed":o.slug===r,onClick:()=>y(o.slug),children:o.name},o.slug))}),a.jsxs("div",{className:"cl-panel",children:[a.jsxs("div",{className:"cl-main",children:[a.jsx("span",{className:"cl-temp font-display",children:c!==null?`${c}°`:", "}),i!==null&&a.jsxs("span",{className:"cl-cond",children:[a.jsx("span",{className:"cl-cond-icon",children:a.jsx(_,{cond:i,size:26})}),a.jsx("span",{className:"cl-cond-label font-display",children:t.cond[i]})]}),a.jsx("span",{className:"cl-source",children:l?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"cl-dot","aria-hidden":"true"}),t.live]}):s?t.snapshotLabel:null})]}),f.length>0&&a.jsx("div",{className:"cl-stats",children:f.join(" · ")}),l&&l.days.length>0&&a.jsx("ul",{className:"cl-days","aria-label":t.forecastAria,children:l.days.map(o=>a.jsxs("li",{className:"cl-day",children:[a.jsx("span",{className:"cl-day-initial",children:T(o.iso)}),a.jsx("span",{className:"cl-day-icon",children:a.jsx(_,{cond:o.cond,size:18})}),a.jsxs("span",{className:"cl-day-hilo",children:[o.hi,"° ",a.jsxs("span",{className:"cl-day-lo",children:[o.lo,"°"]})]})]},o.iso))})]}),a.jsxs("p",{className:"cl-attr",children:[a.jsx("a",{href:t.liveHref,hrefLang:e==="en"?void 0:"en",rel:"noopener",target:"_blank",children:t.attrLive})," · ",a.jsx("a",{href:"https://open-meteo.com/",hrefLang:e==="en"?void 0:"en",rel:"noopener",target:"_blank",children:t.attrSea})]}),a.jsx("style",{children:`
        .cl {
          display: block;
          min-height: 420px; /* CLS guard: matches the section's reserved box */
        }
        .cl-tabs {
          display: flex;
          gap: var(--spacing-xs);
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          border-bottom: 1px solid var(--color-rule);
          padding-bottom: var(--spacing-md);
        }
        .cl-tabs::-webkit-scrollbar { display: none; }
        .cl-tab {
          flex: 0 0 auto;
          background: transparent;
          border: none;
          border-bottom: 1px solid transparent;
          color: var(--color-muted);
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          line-height: 1;
          padding: var(--spacing-sm) var(--spacing-md);
          cursor: pointer;
          white-space: nowrap;
          transition: color var(--dur-ui) var(--ease-brand),
            border-color var(--dur-ui) var(--ease-brand);
        }
        .cl-tab:hover { color: var(--color-ink); }
        .cl-tab[aria-pressed='true'] {
          color: var(--color-ink);
          border-bottom-color: var(--color-olive);
        }
        .cl-panel {
          min-height: 280px;
          padding-top: var(--spacing-2xl);
        }
        .cl-main {
          display: flex;
          align-items: baseline;
          gap: var(--spacing-xl);
          flex-wrap: wrap;
        }
        .cl-temp {
          font-family: var(--font-display);
          font-weight: 300;
          font-size: clamp(3.5rem, 8vw, 6rem);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: var(--color-ink);
        }
        .cl-cond {
          display: inline-flex;
          align-items: baseline;
          gap: var(--spacing-sm);
        }
        .cl-cond-icon {
          color: var(--color-olive);
          transform: translateY(3px);
        }
        .cl-cond-label {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 300;
          font-size: var(--text-h4);
          color: var(--color-ink);
        }
        .cl-source {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .cl-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-olive);
          animation: cl-pulse 2.4s var(--ease-brand) infinite;
        }
        @keyframes cl-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cl-dot { animation: none; }
        }
        .cl-stats {
          margin-top: var(--spacing-lg);
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .cl-days {
          display: flex;
          gap: var(--spacing-lg);
          flex-wrap: wrap;
          list-style: none;
          margin: var(--spacing-2xl) 0 0;
          padding: var(--spacing-lg) 0 0;
          border-top: 1px solid var(--color-rule);
        }
        .cl-day {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }
        .cl-day-initial {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.14em;
          color: var(--color-muted);
        }
        .cl-day-icon { color: var(--color-olive); display: inline-flex; }
        .cl-day-hilo {
          font-family: var(--font-display);
          font-size: var(--text-h6);
          font-weight: 400;
          color: var(--color-ink);
        }
        .cl-day-lo { color: var(--color-muted); }
        .cl-attr {
          margin: var(--spacing-2xl) 0 0;
          font-size: var(--text-eyebrow);
          letter-spacing: 0.08em;
          color: var(--color-muted);
        }
        .cl-attr a {
          color: var(--color-muted);
          text-decoration: none;
          transition: color var(--dur-ui) var(--ease-brand);
        }
        .cl-attr a:hover { color: var(--color-olive); }
        @media (max-width: 600px) {
          .cl-main { gap: var(--spacing-lg); }
          .cl-panel { min-height: 300px; }
        }
      `})]})}export{Y as default};
