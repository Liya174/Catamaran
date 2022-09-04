function init() {
    const cards = document.querySelectorAll('.cards-card');

    const onCardHover = (event) => {
        const card = event.target.closest('.cards-card');
        card.querySelector('.cards-card__text').classList.add('active');

        card.removeEventListener('mouseover', onCardHover);
        card.addEventListener('mouseout', onCardOut);
    }

    const onCardOut = (event) => {
        const card = event.target.closest('.cards-card');
        card.querySelector('.cards-card__text').classList.remove('active');

        card.addEventListener('mouseover', onCardHover);
        card.removeEventListener('mouseout', onCardOut);
    }
    
    Array.from(cards).forEach(card => {
        card.addEventListener('mouseover', onCardHover);
    })
};

document.addEventListener('DOMContentLoaded', init)