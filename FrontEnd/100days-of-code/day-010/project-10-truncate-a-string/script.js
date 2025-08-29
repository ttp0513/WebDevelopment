// Truncates a string if it exceeds the specified length,
// Appending '...' to indicate the truncation.

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));