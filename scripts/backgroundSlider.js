function init() {
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        const heroBg = document.querySelector('.hero-background');
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
      
        setTimeout(showSlides, 3000); 
    }
};

document.addEventListener('DOMContentLoaded', init)