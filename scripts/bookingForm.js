function init() {
    const bookingForm = document.querySelector('#book-form');
    
    const onBookingSubmit = (event) => {
      event.preventDefault();
      console.log('event: ', event);
      
    }

    bookingForm.addEventListener('submit', onBookingSubmit);
};

document.addEventListener('DOMContentLoaded', init)