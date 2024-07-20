/**
 * Check if a String is a Palindrome
 * 
 * A palindrome is a word, phrase, number, or other sequence of characters that reads 
 * the same forward and backward (ignoring spaces, punctuation, and capitalization).
 * 
 * Write a function `isPalindrome` that checks if a given string is a palindrome.
 * The function should return `true` if the string is a palindrome and `false` otherwise.
 * 
 * Examples:
 * isPalindrome("A man, a plan, a canal, Panama") => true
 * isPalindrome("racecar") => true
 * isPalindrome("hello") => false
 * 
 * @param {string} str - The string to be checked
 * @return {boolean} - Returns true if the string is a palindrome, otherwise false
 */

const isPalindrome = (str) => {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
};

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
