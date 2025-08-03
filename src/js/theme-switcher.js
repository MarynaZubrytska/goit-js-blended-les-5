const THEME_KEY = 'theme';

export function applySavedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  document.body.classList.remove('theme-light', 'theme-dark');
  document.body.classList.add(savedTheme || 'theme-light');
}

export function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');

  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('theme-light');

    document.body.classList.toggle('theme-light', !isLight);
    document.body.classList.toggle('theme-dark', isLight);

    const newTheme = isLight ? 'theme-dark' : 'theme-light';
    localStorage.setItem(THEME_KEY, newTheme);
  });
}
