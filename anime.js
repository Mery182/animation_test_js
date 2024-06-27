
import anime from 'animejs/lib/anime.es.js';


const totalCards = 100;
let cardsActive = false;
const gridContainer = document.getElementById('anime-box');
const toggleButton = document.getElementById('toggle-button');
const toggleStatus = document.getElementById('toggle-status');

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

function removeCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    anime({
      targets: card,
      opacity: [1, 0],
      translateY: [0, 300],
      duration: 500,
      easing: 'easeOutCubic',
      // delay: (totalCards - index) * 50,
      complete: () => {
        card.remove();
      },
    });
  });
}

toggleButton.addEventListener('click', () => {
  cardsActive = !cardsActive;
  toggleStatus.textContent = cardsActive ? 'ON' : 'OFF';
  if (cardsActive) {
    addCards();
  } else {
    removeCards();
  }
});

