# Проект «Исследование реализаций анимации на фреймворке Vue.js»

Проект разработанный на языке программирования JS,демонстрирующий четыре разных подхода к анимации:

- **CSS Animation**
- **JS Animation**
- **Anime.js**  
  Анимация с использованием библиотеки [Anime.js](https://animejs.com/).
- **GSAP**  
  Анимация с помощью [GreenSock (GSAP)](https://greensock.com/).

---

## Метрики производительности

Проект собирает и в реальном времени отображает ключевые показатели производительности:

- **Web Vitals** (LCP, FCP, TTFB, INP, CLS)  
  Через библиотеку `web-vitals` выводятся в виде HUD-панели в правом верхнем углу.

- **Stats.js**  
  Панель FPS (кадров в секунду), загружаемая с помощью `stats.js`, отображается в левом верхнем углу.

---

## Стек технологий

- **HTML**
- **JS**
- **Vite** (быстрая сборка и HMR)
- **web-vitals** (Google)
- **stats.js**
- **Anime.js**
- **GSAP**
- **CSS3** (Flex/Grid, keyframes, transitions)

---

## Быстрый старт

1. Клонировать репозиторий
   ```bash
   git clone <URL>
   cd <project-folder>
   npm install
   npm run dev
   npm run build
   cd dist
   http-server
   ```
