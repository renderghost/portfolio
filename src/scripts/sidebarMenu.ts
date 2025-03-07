// src/scripts/sidebarMenu.ts
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const sidebarMenu = document.querySelector('.sidebar-menu');
const main = document.querySelector('.main');

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', function (e) {
    e.preventDefault();
    main?.classList.toggle('active');
    sidebarOverlay?.classList.toggle('hidden');
    sidebarMenu?.classList.toggle('-translate-x-full');
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', function (e) {
    e.preventDefault();
    main?.classList.add('active');
    sidebarOverlay?.classList.add('hidden');
    sidebarMenu?.classList.add('-translate-x-full');
  });
}
