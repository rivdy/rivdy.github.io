const root = document.documentElement;
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

const btn = document.getElementById('theme');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');

function setIcon(){ btn.textContent = root.classList.contains('light') ? '☀' : '☾'; }
setIcon();

btn?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  setIcon();
});
