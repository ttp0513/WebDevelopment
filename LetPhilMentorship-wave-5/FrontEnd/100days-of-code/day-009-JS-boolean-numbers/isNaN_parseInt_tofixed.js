//  Simulated user input (could come from a form or CSV)
const rawAmount = " 129.99USD "; // Try changing to "abc", "100.5", "NaN", "42px", etc.

// Step 1: Clean and parse the input
const cleanedAmount = parseFloat(rawAmount);

// Step 2: Validate using isNaN and Number.isNaN
if (isNaN(cleanedAmount)) {
  console.log(" Invalid input: cannot be converted to a number.");
} else if (Number.isNaN(cleanedAmount)) {
  console.log(" Input is strictly NaN.");
} else {
  // Step 3: Format the number to 2 decimal places for currency display
  const formattedAmount = cleanedAmount.toFixed(2);

  // Step 4: Output the result
  console.log(`Valid invoice amount: $${formattedAmount}`);
}
