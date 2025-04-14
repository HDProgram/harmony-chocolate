document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-toggle-button');
  const toggleIcon = document.querySelector('.theme-toggle-icon');
  const htmlElement = document.documentElement;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.classList.remove('light-mode', 'dark-mode');
    htmlElement.classList.add(savedTheme);
    updateIcon(savedTheme);
  }

  toggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

    htmlElement.classList.remove('light-mode', 'dark-mode');
    htmlElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === 'dark-mode') {
      toggleIcon.src = './images/icons/moon.svg';
      toggleIcon.alt = 'Moon icon';
    } else {
      toggleIcon.src = './images/icons/sun.svg';
      toggleIcon.alt = 'Sun icon';
    }
  }
});