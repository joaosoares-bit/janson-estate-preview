import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as c}from"./index.CO9X3OiW.js";const f={en:{price:"Purchase price (EUR)",ltv:"Loan-to-value",ltvHint:"Non-residents are commonly offered up to 70% of the price; residents are commonly offered up to 80%. Each lender and each file decides for itself.",rate:"Annual interest rate (%)",term:"Term",years:"years",rateNote:"The rate may be fixed for the whole term or variable, following a reference index. This calculator assumes one constant rate; a variable loan will move with the index.",resultHead:"Your estimate",monthly:"Monthly repayment",loan:"Loan amount",deposit:"Deposit needed",interest:"Total interest over the term",repaid:"Total repaid",plusCosts:"Plus purchase costs: see the calculator above.",disclaimerTitle:"Indicative only",disclaimer:"This is an indicative estimate, not an offer. Lending terms, rates and ceilings differ by lender and applicant and are revised from time to time; fees and insurance are not included. Confirm the actual terms in writing with the lender and with your lawyer before committing."},nl:{price:"Aankoopprijs (EUR)",ltv:"Financiering als deel van de prijs",ltvHint:"Niet-ingezetenen krijgen gewoonlijk tot 70% van de prijs aangeboden; ingezetenen gewoonlijk tot 80%. Elke kredietgever en elk dossier beslist zelf.",rate:"Jaarlijkse rente (%)",term:"Looptijd",years:"jaar",rateNote:"De rente kan voor de hele looptijd vast zijn of variabel, volgens een referentie-index. Deze rekenmachine gaat uit van één constante rente; een variabele lening beweegt mee met de index.",resultHead:"Uw raming",monthly:"Maandelijkse aflossing",loan:"Leenbedrag",deposit:"Benodigde eigen inbreng",interest:"Totale rente over de looptijd",repaid:"Totaal terugbetaald",plusCosts:"Plus aankoopkosten: zie de rekenmachine hierboven.",disclaimerTitle:"Uitsluitend indicatief",disclaimer:"Dit is een indicatieve raming, geen aanbod. Voorwaarden, rentes en maxima verschillen per kredietgever en aanvrager en worden van tijd tot tijd herzien; kosten en verzekeringen zijn niet meegerekend. Laat de werkelijke voorwaarden schriftelijk bevestigen door de kredietgever en uw advocaat voordat u zich verbindt."},es:{price:"Precio de compra (EUR)",ltv:"Porcentaje financiado del precio",ltvHint:"A los no residentes se les ofrece habitualmente hasta el 70 % del precio; a los residentes, habitualmente hasta el 80 %. Cada entidad y cada expediente deciden por sí mismos.",rate:"Tipo de interés anual (%)",term:"Plazo",years:"años",rateNote:"El tipo puede ser fijo durante todo el plazo o variable, referenciado a un índice. Esta calculadora supone un tipo constante; un préstamo variable se moverá con el índice.",resultHead:"Su estimación",monthly:"Cuota mensual",loan:"Importe del préstamo",deposit:"Entrada necesaria",interest:"Intereses totales durante el plazo",repaid:"Total devuelto",plusCosts:"Más los gastos de compra: vea la calculadora anterior.",disclaimerTitle:"Solo orientativo",disclaimer:"Esta es una estimación orientativa, no una oferta. Las condiciones, los tipos y los límites varían según la entidad y el solicitante y se revisan de vez en cuando; no se incluyen comisiones ni seguros. Confirme las condiciones reales por escrito con la entidad y con su abogado antes de comprometerse."}};function x(n,a=!1){const r=n.trim();if(!r)return 0;const d=!a&&/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(r)?r.replace(/\./g,"").replace(",","."):r.replace(",","."),t=parseFloat(d);return Number.isFinite(t)&&t>0?t:0}function T({locale:n}){const a=f[n]??f.en,[r,d]=c.useState("1000000"),[t,b]=c.useState(70),[v,j]=c.useState("3,2"),[m,y]=c.useState(20),s=new Intl.NumberFormat(n,{style:"currency",currency:"EUR",maximumFractionDigits:0}),w=new Intl.NumberFormat(n,{style:"percent",maximumFractionDigits:0}),u=x(r),o=u*t/100,N=u-o,l=m*12,p=x(v,!0)/100/12,h=l===0?0:p===0?o/l:o*p/(1-Math.pow(1+p,-l)),g=h*l,k=Math.max(g-o,0);return e.jsxs("div",{className:"mc",children:[e.jsxs("div",{className:"mc-grid",children:[e.jsxs("div",{className:"mc-inputs",children:[e.jsxs("label",{className:"mc-field",htmlFor:"mc-price",children:[e.jsx("span",{className:"mc-label",children:a.price}),e.jsx("input",{id:"mc-price",className:"mc-input",type:"text",inputMode:"numeric",value:r,onChange:i=>d(i.target.value),autoComplete:"off"})]}),e.jsxs("label",{className:"mc-field",htmlFor:"mc-ltv",children:[e.jsxs("span",{className:"mc-label",children:[a.ltv," · ",e.jsx("span",{className:"mc-val",children:w.format(t/100)})]}),e.jsx("input",{id:"mc-ltv",className:"mc-range",type:"range",min:30,max:80,step:1,value:t,onChange:i=>b(Number(i.target.value))}),e.jsx("span",{className:"mc-hint",children:a.ltvHint})]}),e.jsxs("label",{className:"mc-field",htmlFor:"mc-rate",children:[e.jsx("span",{className:"mc-label",children:a.rate}),e.jsx("input",{id:"mc-rate",className:"mc-input",type:"text",inputMode:"decimal",value:v,onChange:i=>j(i.target.value),autoComplete:"off"})]}),e.jsxs("label",{className:"mc-field",htmlFor:"mc-term",children:[e.jsxs("span",{className:"mc-label",children:[a.term," · ",e.jsxs("span",{className:"mc-val",children:[m," ",a.years]})]}),e.jsx("input",{id:"mc-term",className:"mc-range",type:"range",min:5,max:30,step:1,value:m,onChange:i=>y(Number(i.target.value))})]}),e.jsx("p",{className:"mc-hint",children:a.rateNote})]}),e.jsxs("div",{className:"mc-result","aria-live":"polite",children:[e.jsx("div",{className:"mc-group-head",children:a.resultHead}),e.jsxs("div",{className:"mc-hero",children:[e.jsx("span",{className:"mc-hero-label",children:a.monthly}),e.jsx("span",{className:"mc-hero-value font-display",children:s.format(h)})]}),e.jsxs("dl",{className:"mc-list",children:[e.jsxs("div",{children:[e.jsx("dt",{children:a.loan}),e.jsx("dd",{children:s.format(o)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:a.deposit}),e.jsx("dd",{children:s.format(N)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:a.interest}),e.jsx("dd",{children:s.format(k)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:a.repaid}),e.jsx("dd",{children:s.format(g)})]})]}),e.jsx("p",{className:"mc-plus",children:a.plusCosts})]})]}),e.jsxs("p",{className:"mc-disclaimer",role:"note",children:[e.jsxs("strong",{children:[a.disclaimerTitle,"."]})," ",a.disclaimer]}),e.jsx("style",{children:`
        .mc { display: block; min-height: 420px; }
        .mc-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: var(--spacing-3xl);
          align-items: start;
        }
        .mc-inputs { display: grid; gap: var(--spacing-xl); min-width: 0; }
        .mc-field { display: grid; gap: var(--spacing-xs); min-width: 0; }
        .mc-label {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .mc-val { color: var(--color-ink); }
        .mc-input {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          background: var(--color-paper);
          border: 1px solid var(--color-rule);
          border-radius: 0;
          color: var(--color-ink);
          font-family: var(--font-sans);
          font-size: var(--text-body);
          padding: var(--spacing-sm) var(--spacing-md);
          transition: border-color var(--dur-ui) var(--ease-brand);
        }
        .mc-input:hover { border-color: var(--color-bronze); }
        .mc-input:focus-visible { outline: 2px solid var(--color-bronze); outline-offset: 2px; border-color: var(--color-bronze); }
        .mc-range { width: 100%; accent-color: var(--color-olive); cursor: pointer; }
        .mc-range:focus-visible { outline: 2px solid var(--color-bronze); outline-offset: 4px; }
        .mc-hint { margin: 0; font-size: var(--text-small); color: var(--color-muted); line-height: 1.55; }
        .mc-group-head {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-olive);
          padding-bottom: var(--spacing-sm);
          border-bottom: 1px solid var(--color-rule);
        }
        .mc-result { min-width: 0; display: grid; gap: var(--spacing-lg); }
        .mc-hero { display: grid; gap: var(--spacing-xs); }
        .mc-hero-label {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .mc-hero-value { font-size: var(--text-h2); font-weight: 300; line-height: 1; color: var(--color-ink); }
        .mc-list { margin: 0; display: grid; gap: 0; }
        .mc-list > div {
          display: flex;
          justify-content: space-between;
          gap: var(--spacing-md);
          padding: var(--spacing-sm) 0;
          border-bottom: 1px solid var(--color-rule);
          font-size: var(--text-small);
        }
        .mc-list dt { color: var(--color-muted); min-width: 0; }
        .mc-list dd { margin: 0; color: var(--color-ink); font-weight: 600; white-space: nowrap; }
        .mc-plus { margin: 0; font-size: var(--text-small); font-style: italic; color: var(--color-olive); }
        .mc-disclaimer {
          margin: var(--spacing-3xl) 0 0;
          padding: var(--spacing-md) var(--spacing-lg);
          border-left: 2px solid var(--color-bronze);
          background: var(--color-paper);
          font-size: var(--text-small);
          line-height: 1.65;
          color: var(--color-muted);
          max-width: 78ch;
        }
        .mc-disclaimer strong { color: var(--color-ink); font-weight: 600; }
        @media (max-width: 860px) {
          .mc-grid { grid-template-columns: minmax(0, 1fr); gap: var(--spacing-2xl); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mc-input { transition: none; }
        }
      `})]})}export{T as default};
