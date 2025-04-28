import gsap from "gsap";

const totalCards = 200;
const gridContainer = document.getElementById('gsap-box');

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

document.addEventListener("DOMContentLoaded", () => {
    addCards();
});