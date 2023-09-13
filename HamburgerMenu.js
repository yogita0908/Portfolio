const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');


menuToggle.addEventListener('click', () => {
    menu.classList.toggle('opened');
});


menu.addEventListener('click', () => {
    menu.classList.remove('opened');
});