import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as s}from"./index.CO9X3OiW.js";const U={en:{price:"Purchase price (EUR)",type:"Type of purchase",kinds:{resale:"Resale, from a private seller",newbuild:"New build, from a developer",plot:"Plot or commercial property"},mortgage:"Mortgage amount (EUR, optional)",mortgageHint:"Leave at 0 for a purchase without a mortgage.",rates:"Rates and fees",rateDefault:"default · verify with your lawyer",taxLabel:{resale:"ITP, transfer tax (%)",newbuild:"IVA, value added tax (%)",plot:"IVA, value added tax (%)"},ajd:"AJD, stamp duty (%)",notary:"Notary (EUR)",registry:"Land registry (EUR)",lawyer:"Lawyer, share of price (%)",lawyerVat:"IVA on the lawyer (%)",valuation:"Bank valuation (EUR)",mortgageAjdNote:"Stamp duty on the mortgage deed is paid by the bank in Spain (Ley 5/2019), so it is not charged here.",resultHead:"Your estimate",line:"Line",amount:"Amount",totalCosts:"Total purchase costs",pctOfPrice:"Total costs as % of price",fundsNeeded:"Funds needed",fundsFormula:"price + costs − mortgage",disclaimerTitle:"Indicative only",disclaimer:"This is an indicative estimate. Rates are set by the Junta de Andalucía and the State and are revised from time to time; the defaults were retrieved on 21 October 2026. Notary, registry and legal fees vary by case. Confirm every figure in writing with your lawyer before committing.",basis:{resale:"Andalucía general rate · Ley 5/2021, art. 41",newbuild:"Ley 37/1992, art. 91.Uno.1.7º",plot:"Ley 37/1992, general rate"}},nl:{price:"Aankoopprijs (EUR)",type:"Type aankoop",kinds:{resale:"Bestaande woning, van een particulier",newbuild:"Nieuwbouw, van een ontwikkelaar",plot:"Bouwgrond of commercieel vastgoed"},mortgage:"Hypotheekbedrag (EUR, optioneel)",mortgageHint:"Laat op 0 staan voor een aankoop zonder hypotheek.",rates:"Tarieven en kosten",rateDefault:"standaardwaarde · controleer met uw advocaat",taxLabel:{resale:"ITP, overdrachtsbelasting (%)",newbuild:"IVA, btw (%)",plot:"IVA, btw (%)"},ajd:"AJD, zegelrecht (%)",notary:"Notaris (EUR)",registry:"Kadaster (EUR)",lawyer:"Advocaat, aandeel van de prijs (%)",lawyerVat:"IVA over de advocaat (%)",valuation:"Taxatie door de bank (EUR)",mortgageAjdNote:"Het zegelrecht op de hypotheekakte wordt in Spanje door de bank betaald (Ley 5/2019) en is hier dus niet meegerekend.",resultHead:"Uw raming",line:"Post",amount:"Bedrag",totalCosts:"Totale aankoopkosten",pctOfPrice:"Totale kosten als % van de prijs",fundsNeeded:"Benodigd eigen geld",fundsFormula:"prijs + kosten − hypotheek",disclaimerTitle:"Uitsluitend indicatief",disclaimer:"Dit is een indicatieve raming. De tarieven worden vastgesteld door de Junta de Andalucía en de Staat en worden van tijd tot tijd herzien; de standaardwaarden zijn opgehaald op 21 oktober 2026. Notaris-, kadaster- en juridische kosten verschillen per geval. Laat elk bedrag schriftelijk bevestigen door uw advocaat voordat u zich verbindt.",basis:{resale:"Algemeen tarief Andalusië · Ley 5/2021, art. 41",newbuild:"Ley 37/1992, art. 91.Uno.1.7º",plot:"Ley 37/1992, algemeen tarief"}},es:{price:"Precio de compra (EUR)",type:"Tipo de compra",kinds:{resale:"Segunda mano, de un particular",newbuild:"Obra nueva, de un promotor",plot:"Solar o inmueble comercial"},mortgage:"Importe de la hipoteca (EUR, opcional)",mortgageHint:"Déjelo en 0 si compra sin hipoteca.",rates:"Tipos y gastos",rateDefault:"valor por defecto · verifíquelo con su abogado",taxLabel:{resale:"ITP, transmisiones patrimoniales (%)",newbuild:"IVA (%)",plot:"IVA (%)"},ajd:"AJD, actos jurídicos documentados (%)",notary:"Notaría (EUR)",registry:"Registro de la Propiedad (EUR)",lawyer:"Abogado, porcentaje sobre el precio (%)",lawyerVat:"IVA sobre el abogado (%)",valuation:"Tasación bancaria (EUR)",mortgageAjdNote:"El impuesto de actos jurídicos documentados de la escritura de hipoteca lo paga el banco en España (Ley 5/2019), por lo que aquí no se carga.",resultHead:"Su estimación",line:"Concepto",amount:"Importe",totalCosts:"Total gastos de compra",pctOfPrice:"Gastos totales como % del precio",fundsNeeded:"Fondos necesarios",fundsFormula:"precio + gastos − hipoteca",disclaimerTitle:"Solo orientativo",disclaimer:"Esta es una estimación orientativa. Los tipos los fijan la Junta de Andalucía y el Estado y se revisan de vez en cuando; los valores por defecto se consultaron el 21 de octubre de 2026. Los gastos de notaría, registro y honorarios varían según el caso. Confirme cada cifra por escrito con su abogado antes de comprometerse.",basis:{resale:"Tipo general de Andalucía · Ley 5/2021, art. 41",newbuild:"Ley 37/1992, art. 91.Uno.1.7º",plot:"Ley 37/1992, tipo general"}}},R={resale:"7",newbuild:"10",plot:"21"},T={resale:"0",newbuild:"1,2",plot:"1,2"};function r(c,a=!1){const l=c.trim();if(!l)return 0;let d;a?d=l.replace(",","."):d=/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(l)?l.replace(/\./g,"").replace(",","."):l.replace(",",".");const o=parseFloat(d);return Number.isFinite(o)&&o>0?o:0}function Z({locale:c}){const a=U[c]??U.en,[l,d]=s.useState("1000000"),[o,z]=s.useState("resale"),[w,S]=s.useState("0"),[g,j]=s.useState(R.resale),[v,N]=s.useState(T.resale),[A,V]=s.useState("1000"),[k,D]=s.useState("700"),[f,F]=s.useState("1"),[h,I]=s.useState("21"),[L,P]=s.useState("500"),C=t=>{z(t),j(R[t]),N(T[t])},b=new Intl.NumberFormat(c,{style:"currency",currency:"EUR",maximumFractionDigits:0}),H=new Intl.NumberFormat(c,{style:"percent",minimumFractionDigits:1,maximumFractionDigits:2}),p=t=>H.format(t/100),n=r(l),m=Math.min(r(w),n),J=n*r(g,!0)/100,$=n*r(v,!0)/100,E=n*r(f,!0)/100,O=E*r(h,!0)/100,B=m>0?r(L):0,u=[{label:`${a.taxLabel[o].replace(" (%)","")} · ${p(r(g,!0))}`,value:J}];o!=="resale"&&u.push({label:`AJD · ${p(r(v,!0))}`,value:$}),u.push({label:a.notary.replace(" (EUR)",""),value:r(A)},{label:a.registry.replace(" (EUR)",""),value:r(k)},{label:`${a.lawyer.replace(" (%)","")} · ${p(r(f,!0))}`,value:E},{label:`${a.lawyerVat.replace(" (%)","")} · ${p(r(h,!0))}`,value:O}),m>0&&u.push({label:a.valuation.replace(" (EUR)",""),value:B});const y=u.reduce((t,x)=>t+x.value,0),M=n>0?y/n*100:0,q=n+y-m,i=(t,x,K,_,G=!1,X=!1)=>e.jsxs("label",{className:"pc-field",htmlFor:t,children:[e.jsx("span",{className:"pc-label",children:x}),e.jsx("input",{id:t,className:"pc-input",type:"text",inputMode:G?"decimal":"numeric",value:K,onChange:Y=>_(Y.target.value),autoComplete:"off"}),X?e.jsx("span",{className:"pc-flag",children:a.rateDefault}):null]});return e.jsxs("div",{className:"pc",children:[e.jsxs("div",{className:"pc-grid",children:[e.jsxs("div",{className:"pc-inputs",children:[i("pc-price",a.price,l,d),e.jsxs("label",{className:"pc-field",htmlFor:"pc-kind",children:[e.jsx("span",{className:"pc-label",children:a.type}),e.jsx("select",{id:"pc-kind",className:"pc-input pc-select",value:o,onChange:t=>C(t.target.value),children:Object.keys(a.kinds).map(t=>e.jsx("option",{value:t,children:a.kinds[t]},t))})]}),i("pc-mortgage",a.mortgage,w,S),e.jsx("p",{className:"pc-hint",children:a.mortgageHint}),e.jsx("div",{className:"pc-group-head",children:a.rates}),e.jsxs("div",{className:"pc-rates",children:[i("pc-tax",a.taxLabel[o],g,j,!0,!0),o!=="resale"?i("pc-ajd",a.ajd,v,N,!0,!0):null,i("pc-notary",a.notary,A,V,!1,!0),i("pc-registry",a.registry,k,D,!1,!0),i("pc-lawyer",a.lawyer,f,F,!0,!0),i("pc-lawyervat",a.lawyerVat,h,I,!0,!0),m>0?i("pc-valuation",a.valuation,L,P,!1,!0):null]}),e.jsx("p",{className:"pc-basis",children:a.basis[o]}),m>0?e.jsx("p",{className:"pc-basis",children:a.mortgageAjdNote}):null]}),e.jsxs("div",{className:"pc-result","aria-live":"polite",children:[e.jsx("div",{className:"pc-group-head",children:a.resultHead}),e.jsxs("table",{className:"pc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:a.line}),e.jsx("th",{scope:"col",className:"pc-num",children:a.amount})]})}),e.jsx("tbody",{children:u.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.label}),e.jsx("td",{className:"pc-num",children:b.format(t.value)})]},t.label))}),e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:a.totalCosts}),e.jsx("td",{className:"pc-num",children:b.format(y)})]})})]}),e.jsxs("dl",{className:"pc-summary",children:[e.jsxs("div",{children:[e.jsx("dt",{children:a.pctOfPrice}),e.jsx("dd",{className:"font-display",children:p(M)})]}),e.jsxs("div",{children:[e.jsxs("dt",{children:[a.fundsNeeded," ",e.jsxs("span",{className:"pc-formula",children:["(",a.fundsFormula,")"]})]}),e.jsx("dd",{className:"font-display",children:b.format(q)})]})]})]})]}),e.jsxs("p",{className:"pc-disclaimer",role:"note",children:[e.jsxs("strong",{children:[a.disclaimerTitle,"."]})," ",a.disclaimer]}),e.jsx("style",{children:`
        .pc { display: block; min-height: 520px; }
        .pc-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: var(--spacing-3xl);
          align-items: start;
        }
        .pc-inputs { display: grid; gap: var(--spacing-lg); min-width: 0; }
        .pc-rates { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: var(--spacing-lg); }
        .pc-field { display: grid; gap: var(--spacing-xs); min-width: 0; }
        .pc-label {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .pc-input {
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
        .pc-input:hover { border-color: var(--color-bronze); }
        .pc-input:focus-visible { outline: 2px solid var(--color-bronze); outline-offset: 2px; border-color: var(--color-bronze); }
        .pc-flag { font-size: var(--text-eyebrow); color: var(--color-muted); font-style: italic; }
        .pc-hint, .pc-basis { margin: 0; font-size: var(--text-small); color: var(--color-muted); line-height: 1.55; }
        .pc-group-head {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-olive);
          padding-bottom: var(--spacing-sm);
          border-bottom: 1px solid var(--color-rule);
        }
        .pc-result { min-width: 0; display: grid; gap: var(--spacing-lg); }
        .pc-table { width: 100%; border-collapse: collapse; font-size: var(--text-small); }
        .pc-table th, .pc-table td {
          text-align: left;
          padding: var(--spacing-sm) 0;
          border-bottom: 1px solid var(--color-rule);
          font-weight: 400;
          vertical-align: baseline;
        }
        .pc-table thead th {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .pc-table tfoot th, .pc-table tfoot td { font-weight: 600; color: var(--color-ink); border-bottom: none; padding-top: var(--spacing-md); }
        .pc-num { text-align: right !important; white-space: nowrap; padding-left: var(--spacing-md) !important; }
        .pc-summary { display: grid; gap: var(--spacing-lg); margin: 0; padding-top: var(--spacing-md); border-top: 1px solid var(--color-bronze); }
        .pc-summary dt {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .pc-formula { text-transform: none; letter-spacing: 0.02em; }
        .pc-summary dd { margin: var(--spacing-xs) 0 0; font-size: var(--text-h3); font-weight: 300; line-height: 1.1; color: var(--color-ink); }
        .pc-disclaimer {
          margin: var(--spacing-3xl) 0 0;
          padding: var(--spacing-md) var(--spacing-lg);
          border-left: 2px solid var(--color-bronze);
          background: var(--color-paper);
          font-size: var(--text-small);
          line-height: 1.65;
          color: var(--color-muted);
          max-width: 78ch;
        }
        .pc-disclaimer strong { color: var(--color-ink); font-weight: 600; }
        @media (max-width: 860px) {
          .pc-grid { grid-template-columns: minmax(0, 1fr); gap: var(--spacing-2xl); }
        }
        @media (max-width: 480px) {
          .pc-rates { grid-template-columns: minmax(0, 1fr); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pc-input { transition: none; }
        }
      `})]})}export{Z as default};
