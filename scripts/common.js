function init() {
    // shown card text when hover
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


    // shown text when scroll
    const entryShownElements = document.querySelectorAll('.entry-shown');
    
    const onEntry = (entry) => {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.add('active');
        }
      });
    }

    const options = { threshold: [0.5] };
    const observer = new IntersectionObserver(onEntry, options);
    for (let elm of entryShownElements) {
        observer.observe(elm);
    }

    // toggle book button visibility 
    const onDocumentScroll = () => {
      const dynamicBookButton = document.querySelector('#dynamic-book-button');
      const isDynamicVisible = dynamicBookButton.classList.contains('active');

      const staticButtonPosition = document.querySelector('#static-book-button').getBoundingClientRect();
      const isStaticVisible = staticButtonPosition.top < window.innerHeight && staticButtonPosition.bottom >= 0;

      if(isStaticVisible && isDynamicVisible) {
        dynamicBookButton.classList.remove('active');
      }
      
      if(!isStaticVisible && !isDynamicVisible) {
        dynamicBookButton.classList.add('active');
      }
    }

    document.addEventListener('scroll', onDocumentScroll);
};

document.addEventListener('DOMContentLoaded', init)