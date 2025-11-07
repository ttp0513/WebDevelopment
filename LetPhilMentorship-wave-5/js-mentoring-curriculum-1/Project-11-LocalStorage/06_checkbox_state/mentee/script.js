// 🧠 STEP 1: SELECT THE CHECKBOX ELEMENT
// Use document.getElementById() to select the checkbox (id="subscribeCheckbox").
let checkbox = document.getElementById("subscribeCheckbox");
let statusText = document.getElementById("statusText");
// 💾 STEP 2: LOAD CHECKED STATE FROM localStorage
// Use localStorage.getItem("isSubscribed") to see if it was saved as "true" or "false".
// If "true", set checkbox.checked = true.
let subscribed = localStorage.getItem("isSubscribed");

if (subscribed === "true") {
    checkbox.checked = true;
    statusText.textContent = "You are subscribed.";
} else {
    checkbox.checked = false;
    statusText.textContent = "Not subscribed.";
}
// 🎯 STEP 3: SAVE CHECKED STATE WHEN USER TOGGLES THE BOX
// Add a "change" event listener to the checkbox.
// Inside the listener:
// - Get the current checkbox state (true or false)
// - Save it using localStorage.setItem("isSubscribed", value)
checkbox.addEventListener("change", function() {
    localStorage.setItem("isSubscribed", checkbox.checked);
    if (checkbox.checked) {
        statusText.textContent = "You are subscribed.";
    } else {
        statusText.textContent = "Not subscribed.";
    }   
});
// 🔄 STEP 4: RESET BUTTON TO CLEAR SAVED STATE
// Select the reset button (id="resetBtn").
// Add a "click" event listener to it.
// Inside the listener:
// - Clear the saved state from localStorage using localStorage.removeItem("isSubscribed")
// - Uncheck the checkbox (checkbox.checked = false)
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function() {
    localStorage.removeItem("isSubscribed");
    checkbox.checked = false;
    statusText.textContent = "Not subscribed.";
});