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

    cards.forEach(card => {
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

    // feedback form
    const feedbackForm = document.querySelector('#feedback-form');

    const onFeedbackSubmit = (event) => {
      event.preventDefault();
      const warnings = [];

      const subject = document.querySelector('.feedback-title').textContent;
      const address = document.querySelector('.footer-contacts__email').textContent;

      const name = feedbackForm.querySelector('#feedback-name');
      const namePh = name.placeholder.replace('...', '');
      if (name.value.length === 0) warnings.push(`${namePh} is required. `);

      const tel = feedbackForm.querySelector('#feedback-tel');
      const telPh = tel.placeholder.replace('...', '');
      if (tel.value.length === 0) warnings.push(`${telPh} is required. `);

      const message = feedbackForm.querySelector('#feedback-message');
      const messagePh = message.placeholder.replace('...', '');
      if (message.value.length === 0) warnings.push(`${messagePh} is required. `);

      if (warnings.length === 0) {
        const body = namePh + ": " + name.value + '%0D%0A' + telPh + ": " + tel.value  + '%0D%0A' + messagePh + ": " + message.value;
        const str = `mailto:${address}?subject=${subject}&body=${body}`;

        name.value = '';
        tel.value = '';
        message.value = '';

        location.href = str;
      } else {
        alert(warnings.join(''));
      }
    }

    feedbackForm.addEventListener('submit', onFeedbackSubmit);
};

document.addEventListener('DOMContentLoaded', init)
