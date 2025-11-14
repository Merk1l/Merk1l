// Переключение темы
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeBtn.textContent = '🌙 Тёмная тема';
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️ Светлая тема';
    localStorage.setItem('theme', 'dark');
  }
});

// Загрузка темы из localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️ Светлая тема';
  }
});

// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Модальные окна
const modalOverlay = document.getElementById('modal-overlay');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn?.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

closeModalBtn?.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Кнопка "наверх"
const scrollTopBtn = document.querySelector('.scroll-top-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Прогресс скролла
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollProgress.style.width = `${scrollPercent}%`;
});

// Вкладки
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const tabId = btn.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Аккордеон
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    body.classList.toggle('active');
  });
});

// Адаптивное меню
const burgerBtn = document.querySelector('.burger-btn');
const topNav = document.querySelector('.top-nav');

burgerBtn?.addEventListener('click', () => {
  topNav.classList.toggle('nav-open');
});
