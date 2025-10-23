// Add Event Listeners to Menu Bar Icon
let menuBar = document.querySelector(".menu-bar"); 

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
});