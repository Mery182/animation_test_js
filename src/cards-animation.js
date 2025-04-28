// import anime from 'animejs/lib/anime.es.js';
import anime from 'animejs/lib/anime.es.js';

const totalCards = 200;
const gridContainer = document.getElementById('anime-box');

function createCard(index) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = index;
  return card;
}

function addCards() {
  for (let i = 0; i < totalCards; i++) {
    const card = createCard(i);
    gridContainer.appendChild(card);
    anime({
      targets: card,
      opacity: [0, 1],
      translateX: [300, 0],
      duration: 500,
      easing: 'easeOutElastic',
      delay: i * 100,
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addCards();
});