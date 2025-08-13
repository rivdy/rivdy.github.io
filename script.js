// subtle parallax + focus niceties
(function(){
  const hero = document.querySelector('.alive-hero');
  const panel = document.querySelector('.alive-right');
  if(!hero || !panel) return;

  // parallax on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      const y = window.scrollY || 0;
      panel.style.setProperty('--scroll', y.toString());
      hero.classList.add('is-scrolling');
      ticking = false;
    });
    ticking = true;
  });

  // keyboard focus outline only when using keyboard
  function setOutline(e){ document.body.classList.toggle('kbd', e.type === 'keydown'); }
  window.addEventListener('keydown', setOutline);
  window.addEventListener('mousedown', setOutline);
})();
