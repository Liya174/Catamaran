function init() {

    // const onDocumentScroll = () => {
    //     const heroBg = document.querySelector('.hero-background');
    //     console.log('heroBg: ', heroBg);
    //     const heroBgPosition = heroBg.getBoundingClientRect();
    //     const isHeroBgVisible = heroBgPosition.top < window.innerHeight && heroBgPosition.bottom >= 0;
    //     let i = 1;

    //     const changeBg = () => {
    //         document.querySelector('.hero-background').style.backgroundImage = `url('../imgs/hero_bg_${i}.jpg`;
    //         i = (i == 4) ? 1 : (i + 1);
    //     }

    //     let intervalId;
    //     if (isHeroBgVisible) {
    //         intervalId = setInterval(changeBg, 2000);
    //     } else {
    //         if (intervalId) {
    //             console.log('clearInterval: ', clearInterval);
    //             clearInterval(intervalId);
    //         }
    //     }
    // }
  
    // document.addEventListener('scroll', onDocumentScroll);

    // const changeBg = () => {
    //     const heroBg = document.querySelector('.hero-background');
    //     const heroBgPosition = heroBg.getBoundingClientRect();
    //     const isHeroBgVisible = heroBgPosition.top < window.innerHeight && heroBgPosition.bottom >= 0;
    //     if (isHeroBgVisible) {
    //         heroBg.style.backgroundImage = `url('../imgs/hero_bg_${i}.jpg)`;
    //         i = (i == 4) ? 1 : (i + 1); 
    //     }
    // }

    // setInterval(changeBg, 1000);
};

document.addEventListener('DOMContentLoaded', init)