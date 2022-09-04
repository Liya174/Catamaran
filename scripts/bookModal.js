function init() {
    const modalBook = document.querySelector('#modal-book');
    const bookButton = document.querySelector('.book-button');

    const showBookModal = () => {
        modalBook.classList.add('visible');
    }

    const hideBookModal = () => {
        modalBook.classList.remove('visible');
        // TODO: add cleaning the form
    }

    const onBookButtonClick = () => {
        showBookModal();
        bookButton.removeEventListener('click', onBookButtonClick);
        modalBook.addEventListener('click', onDocumentClick); 
    }

    const onDocumentClick = (event) => {
        const isOutside = !event.target.closest('.modal-book');
        if (isOutside) {
            hideBookModal();
            bookButton.addEventListener('click', onBookButtonClick); 
            modalBook.removeEventListener('click', onDocumentClick);
        }
    }

    bookButton.addEventListener('click', onBookButtonClick);
};

document.addEventListener('DOMContentLoaded', init)