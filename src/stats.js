import Stats from '/src/stats2.js';

const stats = new Stats();
stats.showPanel(0); // 0: FPS, 1: MS, 2: MB
document.body.appendChild(stats.dom);

function animate() {
  stats.begin();
  requestAnimationFrame(animate);
  stats.end();
}

requestAnimationFrame(animate);