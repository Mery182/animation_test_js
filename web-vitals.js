import { onLCP, onINP, onCLS, onFCP, onTTFB } from 'web-vitals';

// UI-дисплей
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '10px';
container.style.right = '10px';
container.style.background = '#fff';
container.style.padding = '12px';
container.style.border = '1px solid #ccc';
container.style.borderRadius = '8px';
container.style.fontFamily = 'monospace';
container.style.fontSize = '13px';
container.style.zIndex = '10000';
container.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';

function detectPlatform() {
  return /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
}

const platformInfo = document.createElement('div');
platformInfo.style.marginBottom = '4px';
platformInfo.innerText = `🖥 Platform: ${detectPlatform()}`;
container.appendChild(platformInfo);

function detectBrowser() {
  const ua = navigator.userAgent;

  if (ua.includes('YaBrowser')) return 'Yandex Browser';
  if (ua.includes('Edg')) return 'Microsoft Edge';
  if (ua.includes('OPR') || ua.includes('Opera')) return 'Opera';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Chrome')) return 'Chrome';
  return 'Unknown';
}

const browserInfo = document.createElement('div');
browserInfo.style.marginBottom = '8px';
browserInfo.style.fontWeight = 'bold';
browserInfo.innerText = `🧭 Browser: ${detectBrowser()}`;
container.appendChild(browserInfo);

document.body.appendChild(container);

function formatValue(name, value) {
  if (value == null) return '–'; 
  if (name === 'CLS') return value.toFixed(3);
  return Math.round(value) + 'ms';
}

function getColor(name, value) {
  const bad = {
    LCP: 4000,
    FCP: 3000,
    TTFB: 600,
    INP: 500,
    CLS: 0.2,
  };
  const warning = {
    LCP: 2500,
    FCP: 1800,
    TTFB: 300,
    INP: 200,
    CLS: 0.1,
  };
  if (value >= bad[name]) return 'red';
  if (value >= warning[name]) return 'orange';
  return 'green';
}

function renderMetric({ name, value }) {
  const id = `metric-${name}`;
  let el = document.getElementById(id);
  const formatted = formatValue(name, value);
  const color = getColor(name, value);
  if (!el) {
    el = document.createElement('div');
    el.id = id;
    el.style.marginBottom = '4px';
    container.appendChild(el);
  }
  el.innerHTML = `<strong style="color:${color}">${name}:</strong> ${formatted}`;
}

// Метрики
onCLS(renderMetric);
onINP(renderMetric);
onLCP(renderMetric);
onFCP(renderMetric);
onTTFB(renderMetric);

