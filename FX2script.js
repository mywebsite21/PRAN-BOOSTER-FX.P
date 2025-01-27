document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const colorTheme = document.getElementById('colorTheme');
  const body = document.body;

  /**
   * Handles navigation between different sections of the page.
   * It hides all sections and only shows the target section.
   */
  function handleNavigation(event) {
    event.preventDefault();
    const targetSection = event.target.getAttribute('data-target');

    // Hide all sections
    sections.forEach(section => section.classList.add('hidden'));

    // Show the target section
    document.getElementById(targetSection).classList.remove('hidden');
  }

  /**
   * Handles the theme change functionality based on user selection.
   * Updates the background color and text color.
   */
  function handleThemeChange() {
    const selectedTheme = colorTheme.value;

    switch (selectedTheme) {
      case 'black':
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        break;
      case 'blue':
        body.style.backgroundColor = '#001f3f';
        body.style.color = 'white';
        break;
      case 'green':
        body.style.backgroundColor = '#004d00';
        body.style.color = 'white';
        break;
      default:
        break;
    }
  }

  // Event listeners for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavigation);
  });

  // Event listener for theme change dropdown
  colorTheme.addEventListener('change', handleThemeChange);
});
