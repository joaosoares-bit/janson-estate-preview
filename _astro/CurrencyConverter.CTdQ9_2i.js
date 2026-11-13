import{j as o}from"./jsx-runtime.u17CrQMm.js";import{r as c}from"./index.CO9X3OiW.js";const p={en:"Indicative · rates via ExchangeRate-API",nl:"Indicatief · koersen via ExchangeRate-API",es:"Indicativo · tipos vía ExchangeRate-API"},y={en:{group:"Display currency",note:p.en,showIn:t=>`Show in ${t}`},nl:{group:"Weergavevaluta",note:p.nl,showIn:t=>`Toon in ${t}`},es:{group:"Moneda mostrada",note:p.es,showIn:t=>`Mostrar en ${t}`}},w=[{code:"GBP",symbol:"£",label:"£"},{code:"USD",symbol:"$",label:"$"},{code:"SEK",symbol:"kr",label:"kr"}],v="je-fx-eur",g="je-fx-pref",N=1440*60*1e3,I={en:"en-GB",nl:"nl-NL",es:"es-ES"};function S(t){const r=t.replace(/[^0-9]/g,""),n=Number(r);return Number.isFinite(n)?n:NaN}function j(){try{const t=localStorage.getItem(v);if(!t)return null;const r=JSON.parse(t);return!r||typeof r.fetchedAt!="number"||!r.rates||typeof r.rates!="object"?null:r}catch{return null}}function k(t,r){if(!t)return null;const n=t[r];return typeof n=="number"&&Number.isFinite(n)&&n>0?n:null}function P({priceEur:t,locale:r="en",showNote:n=!0}){const l=y[r]??y.en,[b,i]=c.useState(null),[u,d]=c.useState("GBP"),m=S(t);c.useEffect(()=>{try{const e=localStorage.getItem(g);(e==="GBP"||e==="USD"||e==="SEK")&&d(e)}catch{}},[]),c.useEffect(()=>{let e=!1;const a=j();if(a&&Date.now()-a.fetchedAt<N){i(a.rates);return}return(async()=>{try{const s=await(await fetch("https://open.er-api.com/v6/latest/EUR")).json();if(e)return;if(s&&s.result==="success"&&s.rates){i(s.rates);try{localStorage.setItem(v,JSON.stringify({rates:s.rates,fetchedAt:Date.now()}))}catch{}}else a&&i(a.rates)}catch{!e&&a&&i(a.rates)}})(),()=>{e=!0}},[]);const E=e=>{d(e);try{localStorage.setItem(g,e)}catch{}},h=k(b,u),f=h!==null&&Number.isFinite(m);let x="";if(f){const e=m*h;x=new Intl.NumberFormat(I[r]??"en-GB",{style:"currency",currency:u,maximumFractionDigits:0}).format(e)}return o.jsxs("span",{className:"fx","data-show":f?"true":"false",children:[f&&o.jsxs("span",{className:"fx-inner",children:[o.jsxs("span",{className:"fx-value font-mono",children:["≈ ",x]}),o.jsx("span",{className:"fx-picker",role:"group","aria-label":l.group,children:w.map(e=>o.jsx("button",{type:"button",className:"fx-pick","aria-pressed":e.code===u,onClick:()=>E(e.code),title:l.showIn(e.code),children:e.label},e.code))}),n&&o.jsx("span",{className:"fx-note",children:l.note})]}),o.jsx("style",{children:`
        .fx {
          display: inline-block;
          min-height: 1.2em;
          line-height: 1.2;
        }
        .fx-inner {
          display: inline-flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }
        .fx-value {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.02em;
          color: var(--color-bronze);
        }
        .fx-picker {
          display: inline-flex;
          gap: 2px;
        }
        .fx-pick {
          background: transparent;
          border: 1px solid var(--color-rule);
          color: var(--color-muted);
          font-family: var(--font-mono);
          font-size: 0.625rem;
          line-height: 1;
          /* ≥32px hit target (a11y): visual weight stays quiet via type size. */
          min-width: 32px;
          min-height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 2px 6px;
          cursor: pointer;
          transition: border-color var(--dur-ui, 200ms) var(--ease-brand, ease),
            color var(--dur-ui, 200ms) var(--ease-brand, ease);
        }
        .fx-pick[aria-pressed='true'] {
          border-color: var(--color-olive);
          color: var(--color-olive);
        }
        .fx-note {
          width: 100%;
          font-family: var(--font-sans);
          font-size: 0.5625rem;
          letter-spacing: 0.04em;
          color: var(--color-muted);
          opacity: 0.8;
        }
      `})]})}export{p as FX_NOTE,P as default};
