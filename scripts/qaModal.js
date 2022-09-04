function init() {
    const modalQA = document.querySelector('#modal-qa');
    const qaButton = document.querySelector('.qa-button');

    const showQaModal = () => {
        modalQA.classList.add('visible');
    }

    const hideQaModal = () => {
        modalQA.classList.remove('visible');
    }

    const onQaButtonClick = () => {
        console.log('onQaButtonClick: ');
        showQaModal();
        qaButton.removeEventListener('click', onQaButtonClick);
        modalQA.addEventListener('click', onDocumentClick); 
    }

    const onDocumentClick = (event) => {
        const isOutside = !event.target.closest('.modal-qa');
        if (isOutside) {
            hideQaModal();
            qaButton.addEventListener('click', onQaButtonClick); 
            modalQA.removeEventListener('click', onDocumentClick);
        }
    }

    qaButton.addEventListener('click', onQaButtonClick);
};

document.addEventListener('DOMContentLoaded', init)