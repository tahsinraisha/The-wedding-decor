/* =====================================================
   MAIN.JS — shared interactions for every page
===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav burger ---- */
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('nav.links');
  if(burger && navLinks){
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  /* ---- Language toggle (Bangla <-> English), persists across pages ---- */
  const savedLang = localStorage.getItem('wdt-lang') || 'bn';
  const applyLang = (lang) => {
    document.body.classList.toggle('show-en', lang === 'en');
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('wdt-lang', lang);
  };
  applyLang(savedLang);
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  /* ---- FAQ accordion (homepage) ---- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

});
