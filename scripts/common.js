function init() {
    const cards = document.querySelectorAll('.cards-card');
    
    const entryShownElements = document.querySelectorAll('.entry-shown');
    
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

    const onEntry = (entry) => {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add('active');
          }
        });
      }
    
    Array.from(cards).forEach(card => {
        card.addEventListener('mouseover', onCardHover);
    })

    const options = { threshold: [1] };
    const observer = new IntersectionObserver(onEntry, options);
    for (let elm of entryShownElements) {
        observer.observe(elm);
    }
};

document.addEventListener('DOMContentLoaded', init)