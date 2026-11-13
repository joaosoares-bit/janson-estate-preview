/* Janson Estate · páginas interiores: gaveta do menu, doca que sai junto ao contacto do fim, interruptor «Reduce motion».
   O resto (calculadoras, filtros do diário, galerias, folhas de contacto) é o código dela, que continua a correr. */
(() => {
  const raiz = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const bMov = $('.mov');
  const ler = () => { try { return localStorage.getItem('je-mov') === 'reduzido'; } catch { return false; } };
  const aplica = () => { raiz.dataset.movimento = ler() ? 'reduzido' : 'normal'; bMov?.setAttribute('aria-pressed', String(ler())); };
  aplica();
  bMov?.addEventListener('click', () => { try { ler() ? localStorage.removeItem('je-mov') : localStorage.setItem('je-mov', 'reduzido'); } catch {} aplica(); });

  const gaveta = $('[data-gaveta]');
  $('[data-abre-menu]')?.addEventListener('click', () => gaveta?.showModal ? gaveta.showModal() : null);
  $('[data-fecha-menu]')?.addEventListener('click', () => gaveta?.close());
  gaveta?.addEventListener('click', (e) => { if (e.target === gaveta) gaveta.close(); });

  /* a doca sai quando o último bloco de contacto da página está à vista */
  const doca = $('[data-fixo]'), fim = $$('main section').slice(-1)[0];
  if (doca && fim && 'IntersectionObserver' in window) new IntersectionObserver((es) => es.forEach((e) => doca.classList.toggle('fora', e.isIntersecting)), { threshold: 0.4 }).observe(fim);
  $$('a[data-cta]').forEach((a) => a.addEventListener('click', () => (window.dataLayer = window.dataLayer || []).push({ event: 'cta_click', cta: a.dataset.cta })));
  /* a subscrição do diário abre o email da Paula: diz-se isso à pessoa, para o envio ter um fim visível */
  const aviso = { en: 'Opening your email app with the subscription ready to send.', nl: 'Je e-mailprogramma opent met de inschrijving klaar om te versturen.', es: 'Se abre tu correo con la suscripción lista para enviar.' }[raiz.lang] || '';
  $$('form[data-news-form]').forEach((f) => f.addEventListener('submit', () => { const e = $('input[type=email]', f); if (!e || !e.checkValidity()) return;
    let st = $('.news-aviso', f); if (!st) { st = document.createElement('p'); st.className = 'news-aviso'; st.setAttribute('role', 'status'); f.append(st); } st.textContent = aviso; }));
})();
