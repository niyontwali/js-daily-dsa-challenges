/**
 * Problem:
 * Check if a given string is a palindrome.
 * A palindrome reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
 *
 * Examples:
 * Input: "A man, a plan, a canal, Panama"
 * Output: true
 *
 * Input: "racecar"
 * Output: true
 *
 * Input: "hello"
 * Output: false
 *
 * Approach:
 * - Remove all non-alphanumeric characters using a regex.
 * - Convert the string to lowercase to make the comparison case-insensitive.
 * - Reverse the cleaned string and compare it to the original cleaned string.
 */

const isPalindrome = (inputString) => {
  // Step 1: Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Step 2: Reverse the cleaned string
  const reversedString = cleanedString.split('').reverse().join('');

  // Step 3: Compare cleaned string with its reversed version
  return cleanedString === reversedString;
};

// -------------------------------------------------------------------------
// Example usage
// -------------------------------------------------------------------------
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar"));                        // true
console.log(isPalindrome("hello"));                          // false

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - n = length of the input string
 * - replace() scans through all characters → O(n)
 * - split(), reverse(), join() each scan through the string/array → O(n)
 * - Total: O(4n) → simplified to O(n)
 *
 * Space Complexity: O(n)
 * - cleanedString stores n characters
 * - reversedString stores n characters
 * - Extra memory grows linearly with input size → O(n)
 *
 * More Explanation:
 * - Time Complexity answers: "How long will it take if the string grows?"
 * - Space Complexity answers: "How much extra memory is needed as the string grows?"
 * -------------------------------------------------------------------------
 */
