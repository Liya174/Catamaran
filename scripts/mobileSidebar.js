function init() {
  const openBtn = document.querySelector('.mobile-burger');
  const closeBtn = document.querySelector('.hero-mobile-sidebar__close-icon');
  const mobileSidebar = document.querySelector('.hero-mobile-sidebar');

  const toggleSidebar = () => {
      mobileSidebar.classList.toggle('visible');
  }

  openBtn.addEventListener('click', toggleSidebar);
  closeBtn.addEventListener('click', toggleSidebar);
};

document.addEventListener('DOMContentLoaded', init)
