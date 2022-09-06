function init() {
    const images = [
        {
            id: 0,
            src: './imgs/hero_bg_1.jpg',
        },
        {
            id: 1,
            src: './imgs/hero_bg_2.jpg',
        },
        {
            id: 2,
            src: './imgs/hero_bg_3.jpg',
        },
        {
            id: 3,
            src: './imgs/hero_bg_4.jpg',
        }
    ] 

    const heroBg = document.querySelector('.hero-background');
    let slideIndex = 0;

    const createImages = () => {
        heroBg.innerHTML = '';
        images.forEach( ({ id, src }) => {
            const imageString = `<img class="hero-background__image ${+id===0 ? 'active' : ''}" data-index="${id}" src="${src}" />`;
            heroBg.innerHTML += imageString;
        });
    };

    const changeSlide = () => {
        const heroBgPosition = heroBg.getBoundingClientRect();
        const isHeroBgVisible = heroBgPosition.top < window.innerHeight && heroBgPosition.bottom >= 0;

        if (isHeroBgVisible) {
            let slides = document.querySelectorAll(".hero-background__image");
          
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");  
            }

            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;

            slides[slideIndex-1].classList.add("active");
        }
      
        setTimeout(changeSlide, 3000); 
    };

    createImages();
    changeSlide();
};

document.addEventListener('DOMContentLoaded', init)