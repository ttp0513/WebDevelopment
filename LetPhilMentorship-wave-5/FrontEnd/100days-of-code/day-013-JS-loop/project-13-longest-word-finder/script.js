// Build a function that returns the length of the longest word in the provided sentence.
function getLongestWordLength(sentence) {
    if (sentence.trim() === '') {
        return 0
    }

    let wordList = sentence.trim().split(/\s+/);
    let longestWordLength = 0;

    for (const word of wordList) {
        if (word.length > longestWordLength) {
            longestWordLength = word.length
        }
    } 
    return longestWordLength;
}

let sentence = "The quick brown fox jumped over the lazy dog";
console.log(getLongestWordLength(sentence));