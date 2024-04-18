document.addEventListener('DOMContentLoaded', () => {

    const checkbox = document.querySelector('input[type="checkbox"]');

    const setTheme = (isDarkMode) => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
    };

    checkbox.addEventListener('change', () => {
        setTheme(checkbox.checked);
        localStorage.setItem('theme', checkbox.checked ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
});
