const text = document.querySelector('#text-input');
const counter = document.querySelector('#char-counter');

// Event listener to update character count in real-time
text.addEventListener('input', () => {

    counter.textContent = `Character Count: ${text.value.length}/500`;
    // Convert counter to red if limit is reached
    counter.style.color = text.value.length >= 500 ? 'red' : 'black';

});