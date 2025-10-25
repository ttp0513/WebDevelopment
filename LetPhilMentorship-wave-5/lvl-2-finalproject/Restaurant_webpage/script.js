// Add Event Listeners to Menu Bar Icon to change hamburger menu to cross menu
let menuBar = document.querySelector(".nav-bar"); 

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    document.querySelector('.nav-items').classList.toggle('active');
});

// // Function to update time and date every second
// function updateTimeAndDate() {
//     const timeDisplay = document.getElementById('time-display');
//     const dateDisplay = document.getElementById('date-display');
//     const now = new Date();
//     const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
//     const timeString = now.toLocaleTimeString([], options);
//     const dateString = now.toLocaleDateString();
//     timeDisplay.textContent = timeString;
//     dateDisplay.textContent = dateString;
// }

// // Update time and date every second
// setInterval(updateTimeAndDate, 1000);
// // Initial call to display time and date immediately on load
// updateTimeAndDate();

