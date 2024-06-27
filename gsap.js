import gsap from "gsap";
//start gsap 
const totalCards = 100;
let cardsActive = false;
const gridContainer = document.getElementById('gsap-box');
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
        gsap.fromTo(card,
            { opacity: 0, x: 300 },
            { opacity: 1, x: 0, duration: 1, ease: "elastic.out(1, 0.3)", delay: i * 0.1 }
        );
    }
}

function removeCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        gsap.to(card, {
            opacity: 0,
            y: 300,
            duration: 0.5,
            ease: "power2.out",
            delay: (totalCards - index) * 0.05,
            onComplete: () => card.remove()
        });
    });
}

toggleButton.addEventListener('click', () => {
    cardsActive = !cardsActive;
    toggleStatus.textContent = cardsActive ? 'ON' : 'OFF';
    if (cardsActive) {
        addCards();
    }
    else {
        removeCards();
    }
});