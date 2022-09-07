function init() {
  const mobileBurger = document.querySelector('.mobile-burger');
  const mobileSidebar = document.querySelector('.hero-mobile-sidebar');

  const toggleSidebar = () => {
      mobileSidebar.classList.toggle('visible');
  }

  mobileBurger.addEventListener('click', toggleSidebar);
};

document.addEventListener('DOMContentLoaded', init)
