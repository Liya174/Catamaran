function init() {
    // const clients = document.querySelectorAll('.clients-slider__client');

    // const shiftLeft = () => {
    //     const first = document.querySelector('.clients-slider__client.order1');
    //     const second = document.querySelector('.clients-slider__client.order2');
    //     const third = document.querySelector('.clients-slider__client.order3');

    //     first.classList.remove('order1');
    //     first.classList.add('order3')
    //     first.dataset.order = 3;
    //     second.classList.remove('order2');
    //     second.classList.add('order1');
    //     second.dataset.order = 1;
    //     third.classList.remove('order3');
    //     third.classList.add('order2');
    //     third.dataset.order = 2;
    // }

    // const shiftRight = () => {
    //     const first = document.querySelector('.clients-slider__client.order1');
    //     const second = document.querySelector('.clients-slider__client.order2');
    //     const third = document.querySelector('.clients-slider__client.order3');

    //     first.classList.remove('order1');
    //     first.classList.add('order2')
    //     first.dataset.order = 2;
    //     second.classList.remove('order2');
    //     second.classList.add('order3');
    //     second.dataset.order = 3;
    //     third.classList.remove('order3');
    //     third.classList.add('order1');
    //     third.dataset.order = 1;
    // }

    // const onClientHover = (event) => {
    //     console.log('onClientHover: ', onClientHover);
    //     Array.from(clients).forEach(client => {
    //         client.removeEventListener('mouseover', onClientHover);
    //     })

    //     const client = event.target.closest('.clients-slider__client');
    //     const order = client.dataset.order;
    //     console.log('order: ', order);
    //     if (order == 3) shiftLeft();
    //     if (order == 1) shiftRight();

    //     setTimeout(() => {
    //         Array.from(clients).forEach(client => {
    //             client.addEventListener('mouseover', onClientHover);
    //         })
    //     }, 200)
    // }

    // Array.from(clients).forEach(client => {
    //     client.addEventListener('mouseover', onClientHover);
    // })
};

document.addEventListener('DOMContentLoaded', init)