// Add Event Listeners to Menu Bar Icon to change hamburger menu to cross menu
let menuBar = document.querySelector(".menu-bar"); 

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    document.querySelector('.menu-items').classList.toggle('active');
});