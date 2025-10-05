// GOAL: Practice nested if/else and logical operators (&&, ||) to compute a shipping cost.
//
// RULES (example logic):
// - Base cost by country:
//   US → 5, CA → 7, OTHER → 10
// - Add by weight:
//   If weight > 5kg add 10, else if weight > 1kg add 5, else add 0
// - Express shipping adds 15 if selected
//
// STEP 1: GET ELEMENTS
// - select#country, input#weight, select#isExpress, button#calcBtn, p#result
const selectCountry = document.getElementById('country');
const input = document.getElementById('weight');
const isExpress = document.getElementById('isExpress');
const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');
// STEP 2: LISTEN FOR CLICK
// - Parse weight as Number; validate it.
// - Read isExpress selection ("yes"/"no") and country code.
calcBtn.addEventListener('click', () => {
    let weight = input.valueAsNumber;
    result.textContent = '';
    if (Number.isNaN(weight)) {
        result.textContent = 'Please enter a valid weight';
        return
    }


// STEP 3: START WITH baseCost BY COUNTRY (if / else if / else)
// - If country === "US" → baseCost = 5
// - Else if country === "CA" → baseCost = 7
// - Else → baseCost = 10
    const country = selectCountry.value;
    let baseCost;
    if (country === 'US') {
        baseCost = 5;
    } else if (country === 'CA') {
        baseCost = 7;
    } else {
        baseCost = 10;
    }

// STEP 4: ADD WEIGHT SURCHARGE (nested conditions)
// - If weight > 5 → add 10
// - Else if weight > 1 → add 5
// - Else → add 0
    let surCharge;
    if (weight > 5) {
        surCharge = 10;
    } else if (weight > 1) {
        surCharge = 5;
    } else {
        surCharge = 0;
    }
// STEP 5: EXPRESS OPTION
// - If isExpress === "yes" → add 15
    if (isExpress.value === 'yes') {
        surCharge += 15;
    }
// STEP 6: DISPLAY TOTAL AS A NICE MESSAGE
    const total = baseCost + surCharge;
    result.textContent = `Here is the total shipping cost: $${total}`;
})

