// Access the buttons with the class 'icon'
const icons = document.querySelectorAll('.icon');

// Function to toggle the icon between heart and filled heart
icons.forEach(icon=>{
    icon.addEventListener('click', () => {
        icon.classList.toggle('filled');
        icon.innerHTML = icon.classList.contains('filled') ? '&#10084;' : '&#9825;';
        })
    });