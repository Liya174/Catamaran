function init() {
    const clients = document.querySelectorAll('.clients-slider__client');

    const shiftLeft = () => {
      const allSlides = document.querySelectorAll(".clients-slider__client");
      const previous = "1";
      const current = "2";
      const next = "3";



        const first = document.querySelector('.clients-slider__client[data-order="1"]');
        const second = document.querySelector('.clients-slider__client[data-order="2"]');
        const third = document.querySelector('.clients-slider__client[data-order="3"]');

        first.dataset.order = 3;
        second.dataset.order = 1;
        third.dataset.order = 2;
    }

    const shiftRight = () => {
        const first = document.querySelector('.clients-slider__client[data-order="1"]');
        const second = document.querySelector('.clients-slider__client[data-order="2"]');
        const third = document.querySelector('.clients-slider__client[data-order="3"]');

        first.dataset.order = 2;
        second.dataset.order = 3;
        third.dataset.order = 1;
    }

    const onClientHover = (event) => {
        console.log('onClientHover: ', onClientHover);
        clients.forEach(client => {
            client.removeEventListener('mouseover', onClientHover);
        })

        const client = event.target.closest('.clients-slider__client');
        const order = client.dataset.order;
        console.log('order: ', order);
        if (order == 3) shiftLeft();
        if (order == 1) shiftRight();

        setTimeout(() => {
            clients.forEach(client => {
                client.addEventListener('mouseover', onClientHover);
            })
        }, 200)
    }

    clients.forEach(client => {
        client.addEventListener('mouseover', onClientHover);
    })
};

document.addEventListener('DOMContentLoaded', init)
