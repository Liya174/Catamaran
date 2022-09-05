function init() {
    const CHECKGRONT_CREATE_URL = '/api/3.0/booking/create';

    const modalBook = document.querySelector('#modal-book');
    const bookButtons = document.querySelectorAll('.book-button');
    const bookingForm = document.querySelector('#book-form');

    const showBookModal = () => {
        modalBook.classList.add('visible');
    }

    const hideBookModal = () => {
        modalBook.classList.remove('visible');
        bookingForm.reset();
        Array.from(bookButtons).forEach(btn => {
            btn.addEventListener('click', onBookButtonClick);
        })
        modalBook.removeEventListener('click', onDocumentClick);
    }

    const onBookButtonClick = () => {
        showBookModal();
        Array.from(bookButtons).forEach(btn => {
            btn.removeEventListener('click', onBookButtonClick);
        })
        modalBook.addEventListener('click', onDocumentClick); 
    }

    const onDocumentClick = (event) => {
        const isOutside = !event.target.closest('.modal-book');
        if (isOutside) {
            hideBookModal();
        }
    }

    const onBookingSubmit = (event) => {
        event.preventDefault();
        console.log('event: ', event);
        const formData = new FormData(bookingForm);
        console.log('formData: ', formData);

        hideBookModal();
    }

    Array.from(bookButtons).forEach(btn => {
        btn.addEventListener('click', onBookButtonClick);
    })

    bookingForm.addEventListener('submit', onBookingSubmit);
};

document.addEventListener('DOMContentLoaded', init)