/* Janson Estate · prévia da página inicial. Sem bibliotecas. A página lê-se inteira sem este ficheiro.
   O voo: motor da casa (yacht-hero / Ondara), afinado para um filme de 45 s:
   · zero fotogramas antes do primeiro gesto; a capa é o primeiro fotograma;
   · a câmara tem inércia por cima do scroll nativo (nunca salta com a roda do rato);
   · 450 fotogramas no computador e 300 no telemóvel, do mais grosso para o mais fino;
   · só ±10 fotogramas descomprimidos à volta do atual; o canvas só redesenha quando a imagem muda;
   · no WebKit (Safari, iPhone) os fotogramas carregam por <img>: um ImageBitmap vindo de fetch pinta transparente. */
(() => {
  const raiz = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const parado = () => raiz.dataset.movimento === 'reduzido';
  const limita = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const suave = (a, b, v) => { const t = limita((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  const T = (() => { try { return JSON.parse(document.getElementById('textos').textContent); } catch { return {}; } })();
  const RAIZ = raiz.dataset.raiz || '';
  const camada = (ev, extra) => (window.dataLayer = window.dataLayer || []).push({ event: ev, ...extra });

  /* ── Interruptor «Reduce motion» do rodapé ── */
  const bMov = $('.mov');
  const lerMov = () => { try { return localStorage.getItem('je-mov') === 'reduzido'; } catch { return false; } };
  const aplicaMov = () => { raiz.dataset.movimento = lerMov() ? 'reduzido' : 'normal'; bMov?.setAttribute('aria-pressed', String(lerMov())); };
  aplicaMov();
  bMov?.addEventListener('click', () => { try { lerMov() ? localStorage.removeItem('je-mov') : localStorage.setItem('je-mov', 'reduzido'); } catch {} aplicaMov(); if (parado()) fimAbertura(); });

  /* ── Abertura: o logótipo sobe por trás da linha e voa para o cabeçalho. Acaba sempre (relógio, gesto ou página escondida). ── */
  const abre = $('.abre'), logoCab = $('.marca img');
  let abriu = false;
  function fimAbertura() { if (abriu) return; abriu = true; raiz.classList.add('voou', 'aberto'); abre?.remove(); }
  if (!abre || parado() || document.hidden) fimAbertura();
  else {
    const meio = $('.abre-marca', abre);
    const mede = () => {
      const a = meio.getBoundingClientRect(), c = logoCab.getBoundingClientRect();
      abre.style.setProperty('--dx', `${c.left + c.width / 2 - (a.left + a.width / 2)}px`);
      abre.style.setProperty('--dy', `${c.top + c.height / 2 - (a.top + a.height / 2)}px`);
      abre.style.setProperty('--s', String(c.width / a.width));
    };
    mede(); addEventListener('load', mede, { once: true });
    setTimeout(() => raiz.classList.add('aberto'), 2300);
    setTimeout(fimAbertura, 2700);
    const gestos = ['wheel', 'touchstart', 'keydown', 'pointerdown'];
    const salta = () => { gestos.forEach((g) => removeEventListener(g, salta)); fimAbertura(); };
    gestos.forEach((g) => addEventListener(g, salta, { passive: true }));
    document.addEventListener('visibilitychange', () => { if (document.hidden) fimAbertura(); });
    if (scrollY > 40) fimAbertura();
  }

  /* ── O que anda com o scroll: tudo num só passo por imagem ── */
  const aoRolar = [];
  let marcado = false;
  const corre = () => { marcado = false; for (const f of aoRolar) f(); };
  const pedeRolar = () => { if (!marcado) { marcado = true; requestAnimationFrame(corre); } };
  addEventListener('scroll', pedeRolar, { passive: true });
  addEventListener('resize', pedeRolar, { passive: true });

  /* ── O voo ── */
  const pista = $('[data-voo]'), cab = $('.cab');
  if (pista) {
    const cfg = JSON.parse($('script[type="application/json"]', pista).textContent);
    const palco = $('.voo-palco', pista), canvas = $('.voo-canvas', pista), ctx = canvas.getContext('2d', { alpha: false });
    const cenas = $$('[data-cena]', pista), limiares = cenas.map((c) => +c.dataset.de);
    const sala = $('[data-sala]', pista), trilho = $('[data-trilho]', pista);
    /* As divisões saem do próprio filme dela (descrição do vídeo no site original): do ar, piscina, casa, anoitecer, noite sobre Marbella. */
    const SALAS = (T.salas || ['From the air', 'The pool', 'The garden', 'The living room', 'The kitchen', 'The bedroom', 'The pool at dusk', 'Marbella by night']).map((t, k) => [[0, 0.085, 0.23, 0.385, 0.53, 0.68, 0.80, 0.905][k], t]);
    const ua = navigator.userAgent, wk = /AppleWebKit/.test(ua) && !/Chrome|Chromium|Edg\//.test(ua);
    const AMORTECE = cfg.amortece ?? 0.12, JANELA = 12, VMAX = cfg.vmax ?? 8, DUR = 45;   // a câmara segue o scroll com inércia curta e pára quando ele pára; VMAX só trava os lanços do trackpad
    const vertical = () => innerWidth / innerHeight < 0.8;
    let jogo = vertical() ? cfg.m : cfg.d;
    let blobs = [], prontos = new Map(), aCaminho = new Set();
    let pediu = false, alvo = 0, atual = 0, rodando = false, t0 = 0, desenhado = '', cena = 0, salaAtual = 0;
    const url = (j, i) => `${j.pasta}${String(i).padStart(4, '0')}.webp`;

    function carrega() {
      if (pediu || parado()) return;
      pediu = true;
      const j = jogo, n = j.n, ordem = [], visto = new Set();
      const junta = (i) => { if (i >= 0 && i < n && !visto.has(i)) { visto.add(i); ordem.push(i); } };
      for (let i = 0; i < 20; i++) junta(i);                       // o arranque fica logo fino
      const aqui = Math.round(alvo); for (let d = 0; d < 12; d++) { junta(aqui + d); junta(aqui - d); }
      for (const passo of [16, 8, 4, 2, 1]) for (let i = 0; i < n; i += passo) junta(i);
      let proximo = 0, ativos = 0;
      const segue = () => {
        while (ativos < 6 && proximo < ordem.length) {
          const i = ordem[proximo++]; ativos++;
          fetch(url(j, i)).then((r) => (r.ok ? r.blob() : null)).then((bl) => {
            if (bl && j === jogo) { blobs[i] = bl; if (Math.abs(i - Math.round(atual)) <= JANELA) janela(Math.round(atual)); }
          }, () => {}).finally(() => { ativos--; segue(); });
        }
      };
      segue();
    }
    const larga = (p) => { if (p.close) p.close(); else if (p.u) URL.revokeObjectURL(p.u); };
    function janela(c) {
      const j = jogo;
      for (let i = Math.max(0, c - JANELA); i <= Math.min(j.n - 1, c + JANELA); i++) {
        if (!blobs[i] || prontos.has(i) || aCaminho.has(i)) continue;
        aCaminho.add(i);
        const guarda = (p) => { aCaminho.delete(i); if (j !== jogo) return larga(p); prontos.set(i, p); pede(); };
        if (wk) {
          /* Safari: o ImageBitmap feito directo do ficheiro pinta transparente; feito a partir de uma <img> já descodificada
             fica pronto na placa gráfica e o desenho por imagem fica muito mais barato do que desenhar a <img> */
          const u = URL.createObjectURL(blobs[i]), im = new Image(); im.decoding = 'async'; im.src = u; im.u = u;
          im.decode().then(() => (window.createImageBitmap ? createImageBitmap(im).then((bm) => { URL.revokeObjectURL(u); return bm; }, () => im) : im)).then(guarda, () => { aCaminho.delete(i); URL.revokeObjectURL(u); });
        }
        else createImageBitmap(blobs[i]).then(guarda, () => aCaminho.delete(i));
      }
      for (const [i, p] of prontos) if (Math.abs(i - c) > JANELA + 6) { larga(p); prontos.delete(i); }
    }
    function esquece() { prontos.forEach(larga); prontos = new Map(); aCaminho = new Set(); blobs = []; }
    const gestos = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'keydown'];
    const primeiro = () => { gestos.forEach((g) => removeEventListener(g, primeiro)); carrega(); };
    gestos.forEach((g) => addEventListener(g, primeiro, { passive: true }));

    const perto = (i) => { for (let d = 0; d <= JANELA + 6; d++) { if (prontos.has(i - d)) return prontos.get(i - d); if (prontos.has(i + d)) return prontos.get(i + d); } return null; };
    function cobre(p, alfa) {
      const w = p.naturalWidth || p.width, h = p.naturalHeight || p.height;
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      ctx.globalAlpha = alfa; ctx.drawImage(p, 0, 0);
    }
    function desenha() {
      const a = Math.floor(atual), f = atual - a, chave = `${a}:${Math.round(f * 24)}`;
      if (chave !== desenhado) {
        janela(a);
        const base = prontos.get(a) || perto(a);
        if (base) {
          desenhado = chave;
          cobre(base, 1);
          /* entre dois fotogramas vizinhos mistura-se, mas só com a câmara quase parada: a andar depressa a mistura faz fantasma */
          if (prontos.has(a) && prontos.has(a + 1) && f > 0.04 && Math.abs(alvo - atual) < 1.2) cobre(prontos.get(a + 1), f);
          ctx.globalAlpha = 1;
          palco.classList.toggle('vivo', atual > 0.4);
        }
      }
      /* texto, divisão e trilho seguem a câmara (a posição suavizada), não o dedo: nunca se adiantam à imagem */
      const q = atual / (jogo.n - 1);
      let c = 0; for (let k = 0; k < limiares.length; k++) if (q >= limiares[k]) c = k;
      if (c !== cena) mostra(c);
      let s = 0; for (let k = 0; k < SALAS.length; k++) if (q >= SALAS[k][0]) s = k;
      if (s !== salaAtual) { salaAtual = s; sala.textContent = SALAS[s][1]; }
      trilho.style.setProperty('--q', q.toFixed(4));
      palco.style.setProperty('--fim', suave(0.955, 1, q).toFixed(3));
    }
    function tick(t) {
      const dt = Math.min(64, t - t0); t0 = t;
      const falta = alvo - atual, fps = jogo.n / DUR;
      /* inércia por cima do scroll nativo, com teto de velocidade: por mais força que o dedo ou a roda deem, a câmara
         nunca passa de 8× o filme, e pára pouco depois do dedo (o scroll manda). Com o palco fora do ecrã a câmara salta (ver rola). */
      let passo = falta * (1 - Math.pow(1 - AMORTECE, dt / 16.667));
      const teto = VMAX * fps * dt / 1000;
      passo = Math.max(-teto, Math.min(teto, passo));
      atual += passo;
      if (Math.abs(alvo - atual) < 0.004) atual = alvo;
      desenha();
      if (atual !== alvo) requestAnimationFrame(tick); else rodando = false;
    }
    function pede() { if (parado()) return; desenhado = ''; if (!rodando) { rodando = true; t0 = performance.now(); requestAnimationFrame(tick); } }
    function mostra(i) {
      cena = i;
      cenas.forEach((e, k) => { e.classList.toggle('ativa', k === i); e.classList.toggle('passou', k < i); e.toggleAttribute('inert', k !== i); });
    }
    const curso = () => Math.max(1, pista.offsetHeight - innerHeight);
    function rola() {
      const topo = pista.getBoundingClientRect().top;
      cab.classList.toggle('solido', -topo > curso() + innerHeight * 0.45);
      if (parado()) return;
      const fora = topo > innerHeight || -topo > curso() + innerHeight;   // com o palco fora do ecrã não há voo para ver: a câmara salta
      alvo = Math.round(limita(-topo / curso()) * (jogo.n - 1));   // pousa sempre num fotograma inteiro: parado, nunca há dupla exposição
      if (fora) { atual = alvo; desenhado = ''; }
      pede();
    }
    aoRolar.push(rola);
    new ResizeObserver(() => {
      const novo = vertical() ? cfg.m : cfg.d;
      if (novo !== jogo) { jogo = novo; esquece(); atual = alvo = 0; if (pediu) { pediu = false; carrega(); } }
      desenhado = ''; rola();
    }).observe(palco);
    new MutationObserver(() => { if (parado()) { palco.classList.remove('vivo'); cenas.forEach((e) => e.removeAttribute('inert')); } else { mostra(cena); carrega(); rola(); } }).observe(raiz, { attributes: true, attributeFilter: ['data-movimento'] });
    if (parado()) cenas.forEach((e) => e.removeAttribute('inert'));
    pista.__voo = () => ({ atual, alvo, n: jogo.n, prontos: prontos.size, blobs: blobs.filter(Boolean).length });   // para medir a fluidez (medir/voo.mjs)
    rola();
    if (scrollY > 0) primeiro();
  }

  /* ── Duas tintas: a nota da Paula e os títulos de secção acendem palavra a palavra com o scroll (cor, nunca opacidade) ── */
  const parte = (el) => {
    const palavras = [];
    const anda = (no) => { for (const f of [...no.childNodes]) {
      if (f.nodeType === 3) {
        const frag = document.createDocumentFragment();
        f.textContent.split(/(\s+)/).forEach((t) => {
          if (!t) return;
          if (/^\s+$/.test(t)) frag.append(' ');
          else { const sp = document.createElement('span'); sp.className = 'pl'; sp.textContent = t; palavras.push(sp); frag.append(sp); }
        });
        f.replaceWith(frag);
      } else if (f.nodeType === 1) anda(f);
    } };
    anda(el); return palavras;
  };
  $$('[data-palavras], main h2').forEach((el) => {
    const palavras = parte(el), nota = el.hasAttribute('data-palavras');
    let acesas = -1;
    aoRolar.push(() => {
      const r = el.getBoundingClientRect();
      const n = parado() ? palavras.length : Math.round(limita((innerHeight * (nota ? 0.86 : 0.94) - r.top) / (r.height + innerHeight * (nota ? 0.3 : 0.2))) * palavras.length);
      if (n === acesas) return; acesas = n;
      palavras.forEach((w, i) => w.classList.toggle('acesa', i < n));
    });
  });

  /* ── O retrato abre de baixo para cima quando entra, e a fotografia assenta ── */
  const janelaFoto = $('[data-janela]');
  if (janelaFoto && 'IntersectionObserver' in window && !parado()) {
    janelaFoto.style.setProperty('--abre', '100%'); janelaFoto.style.setProperty('--abre-n', '1');
    new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { janelaFoto.style.setProperty('--abre', '0%'); janelaFoto.style.setProperty('--abre-n', '0'); o.disconnect(); } }), { threshold: 0.2 }).observe(janelaFoto.parentElement);   // observa-se o pai: um elemento todo cortado por clip-path nunca «intersecta»
  }

  /* ── Marca pessoal: o nome dela desliza por trás do retrato com o scroll; as fichas de vidro entram e afastam-se do rato ── */
  const palco = $('[data-palco-paula]');
  if (palco) {
    const nome = $('[data-nome-gigante]', palco), fichas = $('[data-fichas]', palco), cartoes = $$('.ficha', palco);
    aoRolar.push(() => {
      if (parado()) return;
      const r = palco.getBoundingClientRect();
      if (r.bottom < -100 || r.top > innerHeight + 100) return;
      const p = limita((innerHeight - r.top) / (innerHeight + r.height));
      nome.style.setProperty('--nx', `${(-p * 38).toFixed(2)}vw`);
    });
    if ('IntersectionObserver' in window) new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { fichas.classList.add('vistas'); o.disconnect(); } }), { threshold: 0.3 }).observe(palco);
    else fichas.classList.add('vistas');
    let mx = 0, my = 0, rodar = false;
    palco.addEventListener('pointermove', (e) => {
      if (parado() || e.pointerType !== 'mouse') return;
      const r = palco.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - 0.5; my = (e.clientY - r.top) / r.height - 0.5;
      if (!rodar) { rodar = true; requestAnimationFrame(() => { rodar = false; cartoes.forEach((c, k) => { const f = 14 + k * 5; c.style.setProperty('--px', `${(mx * f).toFixed(1)}px`); c.style.setProperty('--py', `${(my * f).toFixed(1)}px`); }); }); }
    });
    palco.addEventListener('pointerleave', () => cartoes.forEach((c) => { c.style.setProperty('--px', '0px'); c.style.setProperty('--py', '0px'); }));
  }

  /* ── Como funciona: o fio de bronze desce com o scroll e acaba na chave ── */
  const passos = $('[data-passos]');
  if (passos) {
    const fio = $('[data-fio]', passos), itens = $$('.passos > li:not(.passo-chave)', passos), chave = $('.passo-chave', passos);
    aoRolar.push(() => {
      const r = passos.getBoundingClientRect(), linha = innerHeight * 0.68;
      const p = limita((linha - r.top) / (r.height - 54));
      fio.style.setProperty('--p', p.toFixed(4));
      itens.forEach((li) => li.classList.toggle('chegou', li.getBoundingClientRect().top < linha));
      chave.style.setProperty('--k', suave(0.9, 1, p).toFixed(3));
    });
  }

  /* ── Zonas: a costa desenha-se de poente para nascente ── */
  const costa = $('.costa');
  if (costa) aoRolar.push(() => { const r = costa.getBoundingClientRect(); costa.style.setProperty('--c', suave(0.95, 0.35, r.top / innerHeight).toFixed(3)); });

  /* ── As casas: filtro segmentado (o polegar desliza), grelha que se rearruma com FLIP, janela de vidro que nasce do cartão,
        e uma subjanela para escolher como falar com a Paula. Sem JavaScript, cada cartão leva à ficha dela. ── */
  const grelha = $('[data-grelha]');
  if (grelha) {
    const cartoes = $$('[data-casa]', grelha), segs = $$('[data-tipo-filtro]'), polegar = $('.seg-polegar');
    const largo = () => innerWidth > 860;
    const visiveis = () => cartoes.filter((c) => !c.hidden);
    const arruma = () => {
      const v = visiveis();
      cartoes.forEach((c) => c.classList.toggle('destaque', largo() && v.length > 2 && c === v[0]));
      v.forEach((c, k) => c.style.setProperty('--o', String(k)));
    };
    const poePolegar = () => { const b = segs.find((x) => x.getAttribute('aria-pressed') === 'true'); if (!b || !polegar) return; polegar.style.width = `${b.offsetWidth}px`; polegar.style.transform = `translateX(${b.offsetLeft - 4}px)`; };
    const filtra = (tipo) => {
      const antes = new Map(cartoes.map((c) => [c, c.getBoundingClientRect()]));
      cartoes.forEach((c) => { c.hidden = tipo !== 'todas' && c.dataset.tipo !== tipo; });
      arruma();
      if (!largo()) grelha.scrollTo({ left: 0, behavior: 'auto' });
      if (parado() || !grelha.animate) return;
      for (const c of visiveis()) {
        const a = antes.get(c), d = c.getBoundingClientRect();
        if (!a.width) { c.animate([{ opacity: 0, transform: 'scale(.92)' }, { opacity: 1, transform: 'none' }], { duration: 560, easing: 'cubic-bezier(.2,.9,.25,1)' }); continue; }
        c.animate([{ transformOrigin: '0 0', transform: `translate(${a.left - d.left}px, ${a.top - d.top}px) scale(${a.width / d.width}, ${a.height / d.height})` }, { transformOrigin: '0 0', transform: 'none' }], { duration: 640, easing: 'cubic-bezier(.2,.9,.25,1)' });
      }
    };
    segs.forEach((b) => b.addEventListener('click', () => {
      segs.forEach((x) => { x.setAttribute('aria-pressed', String(x === b)); x.toggleAttribute('aria-current', x === b); }); poePolegar(); filtra(b.dataset.tipoFiltro);
      camada('homes_filter', { type: b.dataset.tipoFiltro });
    }));
    addEventListener('resize', () => { arruma(); poePolegar(); }, { passive: true });
    if (document.fonts) document.fonts.ready.then(poePolegar);
    arruma(); poePolegar();
    if ('IntersectionObserver' in window && !parado()) new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { grelha.classList.add('vistos'); o.disconnect(); } }), { threshold: 0.12 }).observe(grelha);
    else grelha.classList.add('vistos');

    /* a janela de vidro */
    const jc = $('[data-janela-casa]');
    if (jc && jc.showModal) {
      const q = (k) => $(`[data-jc-${k}]`, jc), foto = $('.janela-foto', jc), sub = $('[data-sub]', jc), vidro = $('.janela-vidro', jc);
      const rotulos = [[/bed|slaapk|dorm/, T.quartos || 'Bedrooms'], [/bath|badk|baño/, T.banhos || 'Bathrooms'], [/m²/, T.area || 'Living area']];
      let atual = 0, origem = null, mensagem = '';
      const enche = (i) => {
        const lista = visiveis(); atual = (i + lista.length) % lista.length;
        const c = lista[atual], d = c.dataset, img = $('img', c);
        q('img').src = `${RAIZ}img/casas/${d.slug}-1200.webp`; q('img').alt = img.alt;
        foto.classList.remove('troca'); void foto.offsetWidth; foto.classList.add('troca');
        q('zona').textContent = `${d.zona} · ${d.estado}`; q('nome').textContent = d.nome; q('preco').textContent = d.preco;
        const partes = d.factos.split(' · ');
        q('factos').innerHTML = [[T.tipo || 'Type', partes[0]], ...partes.slice(1).map((t) => { const r = rotulos.find(([re]) => re.test(t)); return [r ? r[1] : '', r ? t.replace(/\s*(bed|bath|slaapk\.|badk\.|dorm\.|baños)\s*/, '').trim() : t]; })]
          .map(([dt, dd]) => `<div><dt>${dt}</dt><dd>${dd}</dd></div>`).join('');
        mensagem = (T.mensagem || 'Hi Paula, I’m interested in {nome} ({zona}, guide price {preco}). Could you tell me more?').replace('{nome}', d.nome).replace('{zona}', d.zona).replace('{preco}', d.preco);
        q('visita').href = `https://calendly.com/paula-jansonestate/kennismaking?utm_source=website&utm_medium=home_window&utm_content=${d.slug}`;
        q('ficha').href = c.href; q('n').textContent = `${String(atual + 1).padStart(2, '0')} / ${String(lista.length).padStart(2, '0')}`;
        origem = c;
      };
      const daOrigem = (c) => {
        if (!c || !largo()) { jc.style.removeProperty('--dx'); jc.style.removeProperty('--dy'); jc.style.removeProperty('--sc'); return; }
        const r = c.getBoundingClientRect(), w = Math.min(1080, innerWidth * 0.94);
        jc.style.setProperty('--dx', `${(r.left + r.width / 2 - innerWidth / 2).toFixed(0)}px`);
        jc.style.setProperty('--dy', `${(r.top + r.height / 2 - innerHeight / 2).toFixed(0)}px`);
        jc.style.setProperty('--sc', String(Math.min(0.9, r.width / w).toFixed(3)));
      };
      const abreSub = () => {
        $('[data-sub-nome]', jc).textContent = q('nome').textContent; $('[data-sub-msg]', jc).textContent = mensagem;
        $('[data-sub-wa]', jc).href = 'https://wa.me/34603529900?text=' + encodeURIComponent(mensagem);
        $('[data-sub-mail]', jc).href = `mailto:paula@jansonestate.com?subject=${encodeURIComponent(q('nome').textContent)}&body=${encodeURIComponent(mensagem)}`;
        sub.inert = false; jc.classList.add('com-sub'); setTimeout(() => $('.sub-canais a', sub).focus({ preventScroll: true }), 60);
        camada('home_ask', { home: origem?.dataset.slug });
      };
      const fechaSub = () => { jc.classList.remove('com-sub'); sub.inert = true; q('pergunta').focus({ preventScroll: true }); };
      const fecha = () => {
        if (!jc.open || jc.classList.contains('sai')) return;
        fechaSub(); daOrigem(origem && !origem.hidden ? origem : null);
        if (parado()) { jc.close(); return; }
        jc.classList.add('sai'); setTimeout(() => { jc.classList.remove('sai'); jc.close(); }, 320);
      };
      cartoes.forEach((c) => c.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
        e.preventDefault(); enche(visiveis().indexOf(c)); daOrigem(c); jc.showModal(); raiz.classList.add('com-janela');
        camada('home_window', { home: c.dataset.slug });
      }));
      q('ant').addEventListener('click', () => enche(atual - 1)); q('seg').addEventListener('click', () => enche(atual + 1));
      q('fecha').addEventListener('click', fecha); q('pergunta').addEventListener('click', abreSub); $('[data-sub-fecha]', jc).addEventListener('click', fechaSub);
      jc.addEventListener('click', (e) => { if (e.target === jc) fecha(); });
      sub.addEventListener('click', (e) => { if (e.target === sub) fechaSub(); });
      jc.addEventListener('cancel', (e) => { e.preventDefault(); if (jc.classList.contains('com-sub')) fechaSub(); else fecha(); });
      jc.addEventListener('keydown', (e) => { if (jc.classList.contains('com-sub')) return; if (e.key === 'ArrowRight') enche(atual + 1); if (e.key === 'ArrowLeft') enche(atual - 1); });
      jc.addEventListener('close', () => { raiz.classList.remove('com-janela'); jc.classList.remove('com-sub'); sub.inert = true; if (origem) origem.focus({ preventScroll: true }); });
    }
  }

  /* ── Reels no formato da Liz Salvados, a tocar sozinhos: o do centro toca sem som enquanto a secção está à vista;
        setas, teclado, trackpad de lado e dedo trocam de reel; tocar no do centro liga e desliga o som. ── */
  const rolo = $('[data-rolo]');
  if (rolo) {
    const itens = $$('.reel', rolo), contas = $$('.insta-contas [data-conta]');
    const X = [0, 58, 104], E = [1, 0.8, 0.64], O = [1, 0.92, 0.6];
    let lista = itens.slice(), centro = 1, comSom = false, visivel = false, arrastou = false;
    const video = (li) => $('video', li);
    itens.forEach((li) => { const v = video(li); v.addEventListener('playing', () => li.classList.add('tocar')); v.addEventListener('error', () => li.classList.remove('tocar')); });
    const prepara = (li, modo) => { const v = video(li); if (!v.getAttribute('src')) { v.preload = modo; v.src = v.dataset.src; } return v; };
    const marcaSom = () => lista.forEach((li, k) => {
      li.classList.toggle('com-som', k === centro && comSom);
      $('.reel-cartao', li).setAttribute('aria-label', (k === centro ? (comSom ? (T.somOff || 'Turn off sound for the reel from') : (T.somOn || 'Turn on sound for the reel from')) : (T.verReel || 'Show the reel from')) + ` @${li.dataset.conta}`);
    });
    const toca = () => {
      const pode = visivel && !document.hidden && !raiz.classList.contains('com-janela') && !parado();
      lista.forEach((li, k) => {
        const v = video(li);
        if (k === centro && pode) {
          prepara(li, 'auto'); v.muted = !comSom;
          const pr = v.play(); if (pr) pr.catch(() => { if (!v.muted) { comSom = false; v.muted = true; marcaSom(); v.play().catch(() => {}); } });
        } else { if (!v.paused) v.pause(); if (k !== centro) li.classList.remove('tocar'); }
      });
      if (pode) [lista[centro + 1], lista[centro - 1]].forEach((li) => li && prepara(li, 'metadata'));
      marcaSom();
    };
    const poe = () => {
      lista.forEach((li, k) => {
        const d = k - centro, a = Math.abs(d), longe = a > 2;
        li.style.setProperty('--x', `${Math.sign(d) * (longe ? 150 : X[a])}%`);
        li.style.setProperty('--e', String(longe ? 0.5 : E[a])); li.style.setProperty('--o', String(longe ? 0 : O[a])); li.style.setProperty('--z', String(6 - Math.min(a, 5)));
        li.classList.toggle('centro', d === 0); li.style.pointerEvents = longe ? 'none' : '';
        $('.reel-cartao', li).tabIndex = longe ? -1 : 0;
      });
      $('[data-rolo-ant]', rolo).disabled = centro === 0; $('[data-rolo-seg]', rolo).disabled = centro === lista.length - 1;
      toca();
    };
    const vai = (d) => { const n = limita(centro + d, 0, lista.length - 1); if (n === centro) return; video(lista[centro]).currentTime = 0; centro = n; poe(); };
    $('[data-rolo-ant]', rolo).addEventListener('click', () => vai(-1)); $('[data-rolo-seg]', rolo).addEventListener('click', () => vai(1));
    rolo.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') { e.preventDefault(); vai(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); vai(-1); } });
    /* trackpad: o deslizar de lado troca de reel (um por gesto); o vertical continua a descer a página */
    let acum = 0, trava = 0;
    rolo.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      const agora = performance.now(); if (agora < trava) return;
      acum += e.deltaX; if (Math.abs(acum) > 36) { vai(acum > 0 ? 1 : -1); acum = 0; trava = agora + 560; }
    }, { passive: false });
    /* dedo e rato: arrastar de lado */
    let x0 = null, y0 = 0;
    rolo.addEventListener('pointerdown', (e) => { x0 = e.clientX; y0 = e.clientY; arrastou = false; });
    rolo.addEventListener('pointerup', (e) => { if (x0 === null) return; const dx = e.clientX - x0, dy = e.clientY - y0; x0 = null; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { arrastou = true; vai(dx < 0 ? 1 : -1); } });
    rolo.addEventListener('pointercancel', () => { x0 = null; });
    contas.forEach((b) => b.addEventListener('click', () => {
      contas.forEach((x) => { x.setAttribute('aria-pressed', String(x === b)); x.toggleAttribute('aria-current', x === b); });
      lista.forEach((li) => { const v = video(li); if (!v.paused) v.pause(); });
      itens.forEach((li) => { li.hidden = b.dataset.conta !== 'todas' && li.dataset.conta !== b.dataset.conta; });
      lista = itens.filter((li) => !li.hidden); centro = Math.min(1, lista.length - 1); poe();
      camada('instagram_account', { account: b.dataset.conta });
    }));
    itens.forEach((li) => $('.reel-cartao', li).addEventListener('click', () => {
      if (arrastou) { arrastou = false; return; }
      const k = lista.indexOf(li);
      if (k !== centro) { video(lista[centro]).currentTime = 0; centro = k; poe(); return; }
      comSom = !comSom; const v = prepara(li, 'auto'); v.muted = !comSom; if (v.paused) v.play().catch(() => {}); marcaSom();
      camada('instagram_reel_sound', { reel: li.dataset.reelId, on: comSom });
    }));
    /* a barra de tempo do reel do centro */
    const barra = () => { const li = lista[centro]; if (li) { const v = video(li); if (v.duration) $('.reel-barra i', li).style.setProperty('--t', (v.currentTime / v.duration).toFixed(4)); } if (visivel) requestAnimationFrame(barra); };
    if ('IntersectionObserver' in window) new IntersectionObserver((es) => { const antes = visivel; visivel = es[0].isIntersecting; toca(); if (visivel && !antes) requestAnimationFrame(barra); }, { threshold: 0.35 }).observe(rolo);
    document.addEventListener('visibilitychange', toca);
    new MutationObserver(toca).observe(raiz, { attributes: true, attributeFilter: ['class', 'data-movimento'] });
    poe();
  }

  /* ── Zonas: o letreiro em contorno desliza com o scroll (uma linha para cada lado) e os pontos da costa acendem com a lista ── */
  const letras = $$('[data-letreiro]');
  if (letras.length) aoRolar.push(() => {
    if (parado()) return;
    const r = letras[0].parentElement.getBoundingClientRect();
    if (r.bottom < -200 || r.top > innerHeight + 200) return;
    const p = limita((innerHeight - r.top) / (innerHeight + r.height));
    letras.forEach((l) => { const d = +l.dataset.letreiro; l.style.transform = `translate3d(${(d < 0 ? -(4 + p * 26) : -(30 - p * 26)).toFixed(2)}%, 0, 0)`; });
  });
  const pontos = $('[data-pontos]'), caminho = $('[data-costa]'), zonas = $$('.zonas-lista li');
  if (pontos && caminho && caminho.getTotalLength) {
    const T = [0.05, 0.23, 0.41, 0.59, 0.77, 0.95], total = caminho.getTotalLength();
    const dots = T.map((t) => { const pt = caminho.getPointAtLength(total * t), i = document.createElement('i'); i.style.left = `${(pt.x / 1200 * 100).toFixed(2)}%`; i.style.top = `${(pt.y / 90 * 100).toFixed(2)}%`; pontos.append(i); return i; });
    aoRolar.push(() => { const c = parado() ? 1 : parseFloat(costa.style.getPropertyValue('--c') || '0'); dots.forEach((d, k) => d.classList.toggle('visto', c >= T[k] - 0.02)); });
    zonas.forEach((li, k) => { const liga = (v) => () => { dots[k]?.classList.toggle('aceso', v); li.classList.toggle('aceso', v); }; li.addEventListener('pointerenter', liga(true)); li.addEventListener('pointerleave', liga(false)); li.addEventListener('pointerdown', liga(true)); });
  }

  /* ── O mar: linhas finas que ondulam devagar e se afastam do rato ou do dedo. Só desenha com a secção à vista. ── */
  const mares = $$('canvas[data-mar]').map((cv) => ({ cv, ctx: cv.getContext('2d'), claro: cv.dataset.mar === 'claro', visto: false, w: 0, h: 0 }));
  if (mares.length && 'IntersectionObserver' in window) {
    const dpr = Math.min(1.5, devicePixelRatio || 1);
    let px = -9999, py = -9999, ax = -9999, ay = -9999, aCorrer = false;
    const mede = (m) => { const r = m.cv.getBoundingClientRect(); m.w = r.width; m.h = r.height; m.cv.width = Math.round(r.width * dpr); m.cv.height = Math.round(r.height * dpr); };
    const io = new IntersectionObserver((es) => { es.forEach((e) => { const m = mares.find((x) => x.cv.parentElement === e.target); m.visto = e.isIntersecting; if (m.visto) mede(m); }); arranca(); }, { rootMargin: '80px' });
    mares.forEach((m) => io.observe(m.cv.parentElement));
    addEventListener('resize', () => mares.forEach((m) => m.visto && mede(m)), { passive: true });
    addEventListener('pointermove', (e) => { px = e.clientX; py = e.clientY; }, { passive: true });
    addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t) { px = t.clientX; py = t.clientY; } }, { passive: true });
    function quadro(t) {
      const vivos = mares.filter((m) => m.visto);
      if (!vivos.length || parado() || document.hidden || raiz.classList.contains('com-janela')) { aCorrer = false; return; }
      if (ax < -9000) { ax = px; ay = py; } else { ax += (px - ax) * 0.12; ay += (py - ay) * 0.12; }
      for (const m of vivos) {
        const { ctx, w, h } = m, caixa = m.cv.getBoundingClientRect(), fundo = m.cv.parentElement.getBoundingClientRect();
        const lx = ax - caixa.left, ly = ay - caixa.top, desce = -fundo.top * 0.12, vao = w < 700 ? 40 : 52, R = w < 700 ? 110 : 190;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h); ctx.lineWidth = 1;
        const n = Math.ceil(h / vao) + 2;
        for (let i = -1; i < n; i++) {
          const base = i * vao - (desce % vao), k = Math.round((i * vao - (desce % vao) + desce) / vao);
          const ouro = ((k % 5) + 5) % 5 === 0;
          ctx.strokeStyle = ouro ? (m.claro ? 'rgba(154,124,79,.42)' : 'rgba(154,124,79,.5)') : (m.claro ? 'rgba(28,27,24,.075)' : 'rgba(243,239,230,.085)');
          ctx.beginPath();
          for (let x = -20; x <= w + 20; x += 20) {
            let y = base + Math.sin(x * 0.006 + t * 0.00042 + k * 0.9) * 7 + Math.sin(x * 0.0021 - t * 0.00027 + k * 1.7) * 9;
            const dx = x - lx, dy = y - ly, f = Math.exp(-(dx * dx + dy * dy) / (2 * R * R));
            y += (dy < 0 ? -1 : 1) * f * 30;
            if (x === -20) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
      requestAnimationFrame(quadro);
    }
    function arranca() { if (!aCorrer && mares.some((m) => m.visto) && !parado()) { aCorrer = true; requestAnimationFrame(quadro); } }
    document.addEventListener('visibilitychange', arranca);
    new MutationObserver(arranca).observe(raiz, { attributes: true, attributeFilter: ['data-movimento', 'class'] });
  }

  /* ── Doca de contacto: sai quando a secção de contacto está à vista; cada clique fica registado com a origem ── */
  const fixo = $('[data-fixo]'), falar = $('#talk');
  if (fixo && falar && 'IntersectionObserver' in window) new IntersectionObserver((es) => es.forEach((e) => fixo.classList.toggle('fora', e.isIntersecting)), { threshold: 0.3 }).observe(falar);
  $$('a[data-cta]').forEach((a) => a.addEventListener('click', () => camada('cta_click', { cta: a.dataset.cta })));

  pedeRolar();
})();
