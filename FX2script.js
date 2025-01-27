document.addEventListener('DOMContentLoaded', () => {
  // Toggle Dark/Light Mode
  const modeSwitch = document.getElementById('modeSwitch');
  modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', modeSwitch.checked);
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.toggle('dark-mode', modeSwitch.checked);
    });
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.toggle('dark-mode', modeSwitch.checked);
    });
  });

  // Toggle Show/Hide Navigation Menu
  const toggleMenu = document.getElementById('toggleMenu');
  const navMenu = document.getElementById('navMenu');
  toggleMenu.addEventListener('change', () => {
    if (toggleMenu.checked) {
      navMenu.classList.add('hidden');
    } else {
      navMenu.classList.remove('hidden');
    }
  });
});