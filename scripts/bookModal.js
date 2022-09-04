function init() {
    const modalBook = document.querySelector('#modal-book');
    const bookButtons = document.querySelectorAll('.book-button');

    const showBookModal = () => {
        modalBook.classList.add('visible');
    }

    const hideBookModal = () => {
        modalBook.classList.remove('visible');
        // TODO: add cleaning the form
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
            Array.from(bookButtons).forEach(btn => {
                btn.addEventListener('click', onBookButtonClick);
            })
            modalBook.removeEventListener('click', onDocumentClick);
        }
    }

    Array.from(bookButtons).forEach(btn => {
        btn.addEventListener('click', onBookButtonClick);
    })
};

document.addEventListener('DOMContentLoaded', init)