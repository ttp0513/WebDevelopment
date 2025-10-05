// Get access to the buttons
const clickBtn = document.querySelector('.click-button');
const resetBtn = document.querySelector('.reset');

//Get access to the total clicks output box
const clickCounter = document.getElementById('click-counter');

// Add event click to the buttons to count/reset number of clicks
let count = 0;
clickBtn.addEventListener('click', () => {
    count += 1;
    clickCounter.textContent = `${count}`;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    clickCounter.textContent = `${count}`;
});