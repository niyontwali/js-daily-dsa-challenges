/**
 * Remove Vowels from a String
 * 
 * Write a function `removeVowels` that takes a string and returns a new string with all vowels removed.
 * For the purpose of this challenge, vowels are 'a', 'e', 'i', 'o', and 'u' (both uppercase and lowercase).
 * The letter 'y' is not considered a vowel.
 * 
 * Examples:
 * removeVowels("This website is for losers LOL!") => "Ths wbst s fr lsrs LL!"
 * removeVowels("Hello World!") => "Hll Wrld!"
 * 
 * @param {string} str - The string from which to remove vowels
 * @return {string} - Returns the new string with all vowels removed
 */

const removeVowels = (str) => {
  // Define a regular expression to match all vowels (both uppercase and lowercase)
  const vowelsRegex = /[aeiouAEIOU]/g;
  
  // Replace all vowels with an empty string
  return str.replace(vowelsRegex, '');
};

// Test cases
console.log(removeVowels("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
console.log(removeVowels("Hello World!")); // "Hll Wrld!"
console.log(removeVowels("AEIOU aeiou")); // ""
