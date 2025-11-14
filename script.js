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

// Логика для раздела "Кнопки" (как в первой версии)
const sectionBtns = document.querySelectorAll('.section-btn');
const cssExamples = document.getElementById('css-examples');
const jsExamples = document.getElementById('js-examples');
const detailBox = document.getElementById('detail');

// Данные примеров
const examplesData = {
  // CSS
  'css-basic': {
    title: 'Базовая кнопка на CSS',
    desc: 'Простейшая кнопка с использованием базовых свойств CSS: padding, border-radius, background.',
    html: '<button class="btn-basic">Нажми</button>',
    css: `.btn-basic {
  padding: 12px 24px;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-basic:hover {
  background: #0b5ed7;
  transform: scale(1.05);
}`
  },
  'css-gradient': {
    title: 'Кнопка с градиентом',
    desc: 'Использование градиента розового цвета для создания современного вида кнопки.',
    html: '<button class="btn-gradient">Нажми</button>',
    css: `.btn-gradient {
  padding: 12px 24px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-gradient:hover {
  background: linear-gradient(135deg, #ff7a82, #f8b9b0);
  transform: scale(1.05);
}`
  },
  'css-hover': {
    title: 'Анимация при наведении',
    desc: 'Добавление плавного изменения цвета и масштаба при наведении курсора.',
    html: '<button class="btn-hover">Нажми</button>',
    css: `.btn-hover {
  padding: 12px 24px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}
.btn-hover:hover {
  background: #218838;
  transform: scale(1.05) rotate(2deg);
}`
  },

  // JavaScript
  'js-alert': {
    title: 'Кнопка с alert()',
    desc: 'Простейший пример взаимодействия: при клике выводится системное всплывающее окно.',
    html: '<button class="btn-js-alert" id="alertBtn">Показать</button>',
    js: `document.getElementById('alertBtn').addEventListener('click', () => {
  alert('Привет из JavaScript!');
});`
  },
  'js-toggle': {
    title: 'Toggle (переключение стиля)',
    desc: 'При каждом клике кнопка переключает дополнительный CSS-класс, меняя внешний вид.',
    html: '<button class="btn-js-toggle" id="toggleBtn">Переключить</button>',
    js: `document.getElementById('toggleBtn').addEventListener('click', () => {
  document.getElementById('toggleBtn').classList.toggle('highlight');
});`
  },
  'js-counter': {
    title: 'Счётчик кликов',
    desc: 'Кнопка отслеживает количество нажатий и обновляет свой текст.',
    html: '<button class="btn-js-counter" id="counterBtn">Кликни!</button>',
    js: `let count = 0;
const btn = document.getElementById('counterBtn');
btn.addEventListener('click', () => {
  count++;
  btn.textContent = \`Кликов: \${count}\`;
});`
  }
};

// Переключение разделов
sectionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sectionBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const section = btn.dataset.section;
    cssExamples.classList.toggle('active', section === 'css');
    jsExamples.classList.toggle('active', section === 'js');

    // Сбросить детали на первый пример текущего раздела
    const firstExample = section === 'css' ? 'css-basic' : 'js-alert';
    showExample(firstExample);
  });
});

// Обработка кликов по примерам
document.querySelectorAll('.example-card').forEach(card => {
  card.addEventListener('click', () => {
    const exampleId = card.dataset.example;
    showExample(exampleId);
  });
});

function showExample(id) {
  const ex = examplesData[id];
  if (!ex) return;

  let codeHtml = ex.html;
  let codeCss = ex.css || '';
  let codeJs = ex.js || '';

  // Экранируем HTML/JS для безопасного отображения
  const escapedHtml = escapeHtml(codeHtml);
  const escapedCss = escapeHtml(codeCss);
  const escapedJs = escapeHtml(codeJs);

  // Выводим описание и превью
  detailBox.innerHTML = `
    <h2>${ex.title}</h2>
    <p>${ex.desc}</p>
    <div class="preview-area">${codeHtml}</div>
    <div class="code-block"></div>
  `;

  // Находим блок кода и безопасно вставляем содержимое
  const codeBlock = document.querySelector('.code-block');
  let fullCode = escapedHtml + '\n\n<style>\n' + escapedCss + '\n</style>';
  if (codeJs) {
    fullCode += '\n\n<script>\n' + escapedJs + '\n</script>';
  }

  codeBlock.textContent = fullCode; // <-- используем textContent, чтобы код отображался как текст

  // Убираем старые слушатели (если есть)
  removeEventListeners();

  // Добавляем функциональность только для JS-примеров (в preview)
  if (id === 'js-alert') {
    const btn = document.getElementById('alertBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        alert('Привет из JavaScript!');
      });
    }
  } else if (id === 'js-toggle') {
    const btn = document.getElementById('toggleBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        btn.classList.toggle('highlight');
      });
    }
  } else if (id === 'js-counter') {
    const btn = document.getElementById('counterBtn');
    if (btn) {
      let count = 0;
      btn.addEventListener('click', () => {
        count++;
        btn.textContent = `Кликов: ${count}`;
      });
    }
  }
}

function removeEventListeners() {
  // Удаляем все event listeners из preview-кнопок
  const previewBtns = document.querySelectorAll('.preview-area button');
  previewBtns.forEach(btn => {
    // Создаём клон кнопки без событий
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Инициализация
showExample('css-basic');
