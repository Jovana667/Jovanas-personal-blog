document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
        modeToggle.textContent = '🌙';
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            modeToggle.textContent = '🌙';
            localStorage.setItem('darkMode', 'true');
        } else {
            modeToggle.textContent = '☀️';
            localStorage.setItem('darkMode', 'false');
        }
    });
});