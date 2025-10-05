// Given a sentence, build an analyzer that gets
// 1. Vowel Count
// 2. Consonant Count
// 3. Word Count
// 4. Punctuation Count (not letter or space)

// 1. Generate a function that counts vowel in a sentence
function getVowelCount(sentence) {
    let count = 0;
    const vowels = 'aeiou';

    for (char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Checking the vowelCount function is correct
console.log(getVowelCount("How many vowels in this sentence?")) // 9

// 2. Generate a function that counts consonant in a sentence
function getConsonantCount(sentence) {
    let count = 0;
    const consonant = "bcdfghjklmnpqrstvwxyz";

    for (char of sentence.toLowerCase()) {
        if (consonant.includes(char)) {
            count++
        }
    }
    return count;
}

// Checking the consonantCount function is working correctly
let sentenceTest = "How many vowels in this sentence?"
console.log(sentenceTest.length) // 33
console.log(getConsonantCount("How many vowels in this sentence?")) // 18

// 3. Generate a function that counts how many words in a sentence
function getWordCount(sentence) {
    if (sentence.trim() === "") {
        return 0;
    }

    const words = sentence.trim().split(/\s+/);
    return words.length;
}

// Checking the wordCount function is working correctly
console.log(getWordCount("How many vowels in this sentence?")) // 6

// 4. Generate a function that counts how many punctuation in a sentence
function getPunctuationCount(sentence) {
    let count = sentence.length;
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let space = " ";

    for (char of sentence.toLowerCase()) {
        if (letters.includes(char) || space.includes(char)) {
            --count ;
        }
    }
    return count;
}

// Checking the punctuationCount function is working correctly
console.log(getPunctuationCount("How many vowels in this sentence?")) // 1