import{j as n}from"./jsx-runtime.u17CrQMm.js";import{r as x}from"./index.CO9X3OiW.js";const t={annualSunHours:2905,winterMaxC:17.3,rainDays:42};function d(a,e){return e==="en"?a.name:a.exonym?.[e]??a.name}const m=[{id:"amsterdam",name:"Amsterdam",exonym:{es:"Ámsterdam"},cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1780,winterMaxC:6.7,rainDays:133},{id:"rotterdam",name:"Rotterdam",exonym:{es:"Róterdam"},cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1758,winterMaxC:7,rainDays:129},{id:"den-haag",name:"Den Haag",exonym:{es:"La Haya"},cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1775,winterMaxC:6.9,rainDays:131},{id:"utrecht",name:"Utrecht",cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1691,winterMaxC:6.4,rainDays:135},{id:"eindhoven",name:"Eindhoven",cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1721,winterMaxC:6.8,rainDays:128},{id:"groningen",name:"Groningen",exonym:{es:"Groninga"},cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1637,winterMaxC:5.9,rainDays:136},{id:"maastricht",name:"Maastricht",cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1734,winterMaxC:6.6,rainDays:127},{id:"zwolle",name:"Zwolle",cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1656,winterMaxC:6.2,rainDays:135},{id:"breda",name:"Breda",cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1719,winterMaxC:6.9,rainDays:130},{id:"arnhem",name:"Arnhem",cc:"NL",country:{en:"Netherlands",nl:"Nederland",es:"Países Bajos"},annualSunHours:1680,winterMaxC:6.3,rainDays:133},{id:"brussel",name:"Brussel",exonym:{es:"Bruselas"},cc:"BE",country:{en:"Belgium",nl:"België",es:"Bélgica"},annualSunHours:1603,winterMaxC:6.6,rainDays:132},{id:"antwerpen",name:"Antwerpen",exonym:{es:"Amberes"},cc:"BE",country:{en:"Belgium",nl:"België",es:"Bélgica"},annualSunHours:1650,winterMaxC:6.9,rainDays:130},{id:"gent",name:"Gent",exonym:{es:"Gante"},cc:"BE",country:{en:"Belgium",nl:"België",es:"Bélgica"},annualSunHours:1622,winterMaxC:7,rainDays:132},{id:"brugge",name:"Brugge",exonym:{es:"Brujas"},cc:"BE",country:{en:"Belgium",nl:"België",es:"Bélgica"},annualSunHours:1651,winterMaxC:7.2,rainDays:130},{id:"hasselt",name:"Hasselt",cc:"BE",country:{en:"Belgium",nl:"België",es:"Bélgica"},annualSunHours:1620,winterMaxC:6.5,rainDays:132},{id:"london",name:"London",exonym:{nl:"Londen",es:"Londres"},cc:"GB",country:{en:"United Kingdom",nl:"Verenigd Koninkrijk",es:"Reino Unido"},annualSunHours:1675,winterMaxC:8.7,rainDays:112},{id:"manchester",name:"Manchester",cc:"GB",country:{en:"United Kingdom",nl:"Verenigd Koninkrijk",es:"Reino Unido"},annualSunHours:1469,winterMaxC:7.6,rainDays:152},{id:"birmingham",name:"Birmingham",cc:"GB",country:{en:"United Kingdom",nl:"Verenigd Koninkrijk",es:"Reino Unido"},annualSunHours:1523,winterMaxC:7.4,rainDays:130},{id:"leeds",name:"Leeds",cc:"GB",country:{en:"United Kingdom",nl:"Verenigd Koninkrijk",es:"Reino Unido"},annualSunHours:1440,winterMaxC:7.4,rainDays:136},{id:"bristol",name:"Bristol",cc:"GB",country:{en:"United Kingdom",nl:"Verenigd Koninkrijk",es:"Reino Unido"},annualSunHours:1601,winterMaxC:8.5,rainDays:124},{id:"edinburgh",name:"Edinburgh",exonym:{es:"Edimburgo"},cc:"GB",country:{en:"United Kingdom",nl:"Verenigd Koninkrijk",es:"Reino Unido"},annualSunHours:1427,winterMaxC:7.4,rainDays:128},{id:"glasgow",name:"Glasgow",cc:"GB",country:{en:"United Kingdom",nl:"Verenigd Koninkrijk",es:"Reino Unido"},annualSunHours:1290,winterMaxC:7.3,rainDays:160},{id:"belfast",name:"Belfast",cc:"GB",country:{en:"United Kingdom",nl:"Verenigd Koninkrijk",es:"Reino Unido"},annualSunHours:1290,winterMaxC:7.7,rainDays:157},{id:"dublin",name:"Dublin",exonym:{es:"Dublín"},cc:"IE",country:{en:"Ireland",nl:"Ierland",es:"Irlanda"},annualSunHours:1461,winterMaxC:8.3,rainDays:137},{id:"cork",name:"Cork",cc:"IE",country:{en:"Ireland",nl:"Ierland",es:"Irlanda"},annualSunHours:1424,winterMaxC:8.7,rainDays:151},{id:"berlin",name:"Berlin",exonym:{nl:"Berlijn",es:"Berlín"},cc:"DE",country:{en:"Germany",nl:"Duitsland",es:"Alemania"},annualSunHours:1728,winterMaxC:4.7,rainDays:103},{id:"hamburg",name:"Hamburg",exonym:{es:"Hamburgo"},cc:"DE",country:{en:"Germany",nl:"Duitsland",es:"Alemania"},annualSunHours:1588,winterMaxC:4.9,rainDays:127},{id:"munchen",name:"München",exonym:{es:"Múnich"},cc:"DE",country:{en:"Germany",nl:"Duitsland",es:"Alemania"},annualSunHours:1800,winterMaxC:4.7,rainDays:106},{id:"koln",name:"Köln",exonym:{nl:"Keulen",es:"Colonia"},cc:"DE",country:{en:"Germany",nl:"Duitsland",es:"Alemania"},annualSunHours:1584,winterMaxC:6.2,rainDays:117},{id:"frankfurt",name:"Frankfurt",exonym:{es:"Fráncfort"},cc:"DE",country:{en:"Germany",nl:"Duitsland",es:"Alemania"},annualSunHours:1698,winterMaxC:5.6,rainDays:104},{id:"dusseldorf",name:"Düsseldorf",cc:"DE",country:{en:"Germany",nl:"Duitsland",es:"Alemania"},annualSunHours:1602,winterMaxC:6.3,rainDays:118},{id:"stuttgart",name:"Stuttgart",cc:"DE",country:{en:"Germany",nl:"Duitsland",es:"Alemania"},annualSunHours:1784,winterMaxC:5.4,rainDays:101},{id:"hannover",name:"Hannover",exonym:{es:"Hanóver"},cc:"DE",country:{en:"Germany",nl:"Duitsland",es:"Alemania"},annualSunHours:1571,winterMaxC:5.2,rainDays:118},{id:"stockholm",name:"Stockholm",exonym:{es:"Estocolmo"},cc:"SE",country:{en:"Sweden",nl:"Zweden",es:"Suecia"},annualSunHours:1898,winterMaxC:1.6,rainDays:93},{id:"goteborg",name:"Göteborg",exonym:{es:"Gotemburgo"},cc:"SE",country:{en:"Sweden",nl:"Zweden",es:"Suecia"},annualSunHours:1750,winterMaxC:3.1,rainDays:118},{id:"oslo",name:"Oslo",cc:"NO",country:{en:"Norway",nl:"Noorwegen",es:"Noruega"},annualSunHours:1668,winterMaxC:-.1,rainDays:111},{id:"bergen",name:"Bergen",cc:"NO",country:{en:"Norway",nl:"Noorwegen",es:"Noruega"},annualSunHours:1225,winterMaxC:4.1,rainDays:190},{id:"kobenhavn",name:"København",exonym:{nl:"Kopenhagen",es:"Copenhague"},cc:"DK",country:{en:"Denmark",nl:"Denemarken",es:"Dinamarca"},annualSunHours:1780,winterMaxC:4,rainDays:96},{id:"aarhus",name:"Aarhus",cc:"DK",country:{en:"Denmark",nl:"Denemarken",es:"Dinamarca"},annualSunHours:1700,winterMaxC:3.8,rainDays:108},{id:"helsinki",name:"Helsinki",cc:"FI",country:{en:"Finland",nl:"Finland",es:"Finlandia"},annualSunHours:1858,winterMaxC:-.8,rainDays:106},{id:"zurich",name:"Zürich",exonym:{es:"Zúrich"},cc:"CH",country:{en:"Switzerland",nl:"Zwitserland",es:"Suiza"},annualSunHours:1590,winterMaxC:5,rainDays:124},{id:"geneve",name:"Genève",exonym:{es:"Ginebra"},cc:"CH",country:{en:"Switzerland",nl:"Zwitserland",es:"Suiza"},annualSunHours:1887,winterMaxC:6.1,rainDays:103},{id:"basel",name:"Basel",exonym:{nl:"Bazel",es:"Basilea"},cc:"CH",country:{en:"Switzerland",nl:"Zwitserland",es:"Suiza"},annualSunHours:1687,winterMaxC:6.2,rainDays:112},{id:"wien",name:"Wien",exonym:{nl:"Wenen",es:"Viena"},cc:"AT",country:{en:"Austria",nl:"Oostenrijk",es:"Austria"},annualSunHours:1930,winterMaxC:4.7,rainDays:92},{id:"salzburg",name:"Salzburg",exonym:{es:"Salzburgo"},cc:"AT",country:{en:"Austria",nl:"Oostenrijk",es:"Austria"},annualSunHours:1780,winterMaxC:4.4,rainDays:128},{id:"paris",name:"Paris",exonym:{nl:"Parijs",es:"París"},cc:"FR",country:{en:"France",nl:"Frankrijk",es:"Francia"},annualSunHours:1662,winterMaxC:8.1,rainDays:111},{id:"lille",name:"Lille",cc:"FR",country:{en:"France",nl:"Frankrijk",es:"Francia"},annualSunHours:1617,winterMaxC:7.1,rainDays:127},{id:"lyon",name:"Lyon",cc:"FR",country:{en:"France",nl:"Frankrijk",es:"Francia"},annualSunHours:2002,winterMaxC:7.8,rainDays:104}],g=3e3,p={en:"london",nl:"amsterdam",es:"london"},h={en:{selectLabel:"YOUR CITY",sunshine:"Annual sunshine",hoursUnit:"h",delta:a=>`+${a} hours of sun, every year.`,winter:"Winter afternoons",rain:"Rain days a year",daysUnit:"days",vs:"vs",marbella:"Marbella",footnote:"Official 1991–2020 climate normals",tag:"en-GB"},nl:{selectLabel:"UW STAD",sunshine:"Zonuren per jaar",hoursUnit:"u",delta:a=>`+${a} uur zon, elk jaar.`,winter:"Wintermiddagen",rain:"Regendagen per jaar",daysUnit:"dagen",vs:"tegenover",marbella:"Marbella",footnote:"Officiële klimaatnormalen 1991–2020",tag:"nl"},es:{selectLabel:"SU CIUDAD",sunshine:"Horas de sol al año",hoursUnit:"h",delta:a=>`+${a} horas de sol al año.`,winter:"Tardes de invierno",rain:"Días de lluvia al año",daysUnit:"días",vs:"frente a",marbella:"Marbella",footnote:"Normales climáticas oficiales 1991–2020",tag:"es"}};function j({locale:a}){const e=h[a]??h.en,[w,f]=x.useState(p[a]??p.en),b=x.useMemo(()=>{const r=new Map;for(const i of m){const l=i.country[a]??i.country.en,u=r.get(l)??[];u.push(i),r.set(l,u)}const o=new Intl.Collator(e.tag);return[...r.entries()].sort((i,l)=>o.compare(i[0],l[0])).map(([i,l])=>({label:i,cities:[...l].sort((u,N)=>o.compare(d(u,a),d(N,a)))}))},[a,e.tag]),s=m.find(r=>r.id===w)??m[0],c=new Intl.NumberFormat(e.tag,{maximumFractionDigits:0}),y=new Intl.NumberFormat(e.tag,{minimumFractionDigits:1,maximumFractionDigits:1}),v=t.annualSunHours-s.annualSunHours,D=Math.min(100,s.annualSunHours/g*100),S=Math.min(100,t.annualSunHours/g*100);return n.jsxs("div",{className:"cc",children:[n.jsxs("div",{className:"cc-picker",children:[n.jsx("label",{className:"cc-label",htmlFor:"cc-city",children:e.selectLabel}),n.jsx("select",{id:"cc-city",className:"cc-select",value:s.id,onChange:r=>f(r.target.value),children:b.map(r=>n.jsx("optgroup",{label:r.label,children:r.cities.map(o=>n.jsx("option",{value:o.id,children:d(o,a)},o.id))},r.label))})]}),n.jsxs("div",{className:"cc-result",children:[n.jsx("p",{className:"cc-headline font-display",children:e.delta(c.format(v))}),n.jsxs("div",{className:"cc-bars",children:[n.jsxs("div",{className:"cc-bar-row",children:[n.jsx("span",{className:"cc-bar-name",children:d(s,a)}),n.jsx("span",{className:"cc-bar-track","aria-hidden":"true",children:n.jsx("span",{className:"cc-bar-fill cc-bar-fill--city",style:{width:`${D}%`}})}),n.jsxs("span",{className:"cc-bar-value font-display",children:[c.format(s.annualSunHours)," ",e.hoursUnit]})]}),n.jsxs("div",{className:"cc-bar-row",children:[n.jsx("span",{className:"cc-bar-name",children:e.marbella}),n.jsx("span",{className:"cc-bar-track","aria-hidden":"true",children:n.jsx("span",{className:"cc-bar-fill cc-bar-fill--ref",style:{width:`${S}%`}})}),n.jsxs("span",{className:"cc-bar-value font-display",children:[c.format(t.annualSunHours)," ",e.hoursUnit]})]})]}),n.jsxs("div",{className:"cc-pairs",children:[n.jsxs("div",{className:"cc-pair",children:[n.jsx("span",{className:"cc-pair-label",children:e.winter}),n.jsxs("span",{className:"cc-pair-values font-display",children:[n.jsxs("em",{children:[y.format(t.winterMaxC),"°C"]}),n.jsxs("span",{className:"cc-pair-vs",children:[" ",e.vs," "]}),y.format(s.winterMaxC),"°C"]})]}),n.jsxs("div",{className:"cc-pair",children:[n.jsx("span",{className:"cc-pair-label",children:e.rain}),n.jsxs("span",{className:"cc-pair-values font-display",children:[n.jsx("em",{children:c.format(t.rainDays)}),n.jsxs("span",{className:"cc-pair-vs",children:[" ",e.vs," "]}),c.format(s.rainDays)," ",e.daysUnit]})]})]}),n.jsx("p",{className:"cc-footnote",children:e.footnote})]}),n.jsx("style",{children:`
        .cc {
          display: block;
          min-height: 420px; /* CLS guard: matches the section's reserved box */
        }
        .cc-picker {
          display: flex;
          align-items: baseline;
          gap: var(--spacing-lg);
          flex-wrap: wrap;
        }
        .cc-label {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.14em;
          color: var(--color-muted);
        }
        .cc-select {
          appearance: none;
          -webkit-appearance: none;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-rule);
          border-radius: 0;
          color: var(--color-ink);
          font-family: var(--font-display);
          font-size: var(--text-h4);
          font-weight: 300;
          font-style: italic;
          line-height: 1.2;
          padding: 0 1.6em var(--spacing-xs) 0;
          cursor: pointer;
          max-width: 100%;
          background-image: linear-gradient(45deg, transparent 49%, var(--color-muted) 51%),
            linear-gradient(135deg, var(--color-muted) 49%, transparent 51%);
          background-position: calc(100% - 14px) 55%, calc(100% - 8px) 55%;
          background-size: 6px 6px, 6px 6px;
          background-repeat: no-repeat;
          transition: border-color var(--dur-ui) var(--ease-brand);
        }
        .cc-select:hover,
        .cc-select:focus-visible {
          border-bottom-color: var(--color-olive);
          outline: none;
        }
        .cc-result {
          margin-top: var(--spacing-2xl);
        }
        .cc-headline {
          font-family: var(--font-display);
          font-weight: 300;
          font-style: italic;
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: var(--color-ink);
          margin: 0;
          transition: opacity var(--dur-reveal) var(--ease-brand);
        }
        .cc-bars {
          margin-top: var(--spacing-xl);
          display: grid;
          gap: var(--spacing-md);
        }
        .cc-bar-row {
          display: grid;
          grid-template-columns: minmax(90px, 150px) 1fr auto;
          align-items: center;
          gap: var(--spacing-md);
        }
        .cc-bar-name {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-muted);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cc-bar-track {
          display: block;
          height: 4px;
          background: var(--color-rule);
          overflow: hidden;
        }
        .cc-bar-fill {
          display: block;
          height: 100%;
          transition: width var(--dur-reveal) var(--ease-brand);
        }
        .cc-bar-fill--city { background: var(--color-muted); }
        .cc-bar-fill--ref { background: var(--color-olive); }
        .cc-bar-value {
          font-family: var(--font-display);
          font-size: var(--text-h6);
          font-weight: 400;
          color: var(--color-ink);
          white-space: nowrap;
        }
        .cc-pairs {
          display: flex;
          gap: var(--spacing-3xl);
          flex-wrap: wrap;
          margin-top: var(--spacing-2xl);
          padding-top: var(--spacing-xl);
          border-top: 1px solid var(--color-rule);
        }
        .cc-pair {
          display: grid;
          gap: var(--spacing-xs);
        }
        .cc-pair-label {
          font-family: var(--font-mono);
          font-size: var(--text-eyebrow);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .cc-pair-values {
          font-family: var(--font-display);
          font-weight: 300;
          font-size: var(--text-h3);
          line-height: 1.1;
          color: var(--color-muted);
        }
        .cc-pair-values em {
          font-style: normal;
          color: var(--color-ink);
        }
        .cc-pair-vs {
          font-size: var(--text-h6);
          font-style: italic;
          color: var(--color-muted);
        }
        .cc-footnote {
          margin: var(--spacing-2xl) 0 0;
          font-size: var(--text-eyebrow);
          letter-spacing: 0.08em;
          color: var(--color-muted);
        }
        @media (prefers-reduced-motion: reduce) {
          .cc-headline,
          .cc-bar-fill {
            transition: none;
          }
        }
        @media (max-width: 600px) {
          .cc-bar-row { grid-template-columns: minmax(70px, 100px) 1fr auto; }
          .cc-pairs { gap: var(--spacing-xl); }
        }
      `})]})}export{j as default};
