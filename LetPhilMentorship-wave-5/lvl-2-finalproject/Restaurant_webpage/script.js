// Add Event Listeners to Menu Bar Icon to change hamburger menu to cross menu
let menuBar = document.querySelector(".nav-bar"); 

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    document.querySelector('.nav-items').classList.toggle('active');
});


