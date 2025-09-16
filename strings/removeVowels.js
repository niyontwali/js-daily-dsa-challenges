/**
 * Problem:
 * Given a string, remove all vowels (a, e, i, o, u) in both uppercase and lowercase.
 * The letter 'y' is NOT considered a vowel.
 *
 * Examples:
 * Input: "This website is for losers LOL!"
 * Output: "Ths wbst s fr lsrs LL!"
 *
 * Input: "Hello World!"
 * Output: "Hll Wrld!"
 *
 * Input: "AEIOU aeiou"
 * Output: ""
 *
 * Approach:
 * - Use a regular expression to match all vowels globally (both lowercase and uppercase)
 * - Use String.prototype.replace() to remove all vowels in one pass
 */

const removeVowels = (inputString) => {
  // Step 1: Define regex for vowels (a, e, i, o, u) in both cases
  const vowelsRegex = /[aeiouAEIOU]/g;

  // Step 2: Replace all vowels with an empty string
  const stringWithoutVowels = inputString.replace(vowelsRegex, '');

  // Step 3: Return the resulting string
  return stringWithoutVowels;
};

// -------------------------------------------------------------------------
// Example usage
// -------------------------------------------------------------------------
console.log(removeVowels("This website is for losers LOL!")); // Output: "Ths wbst s fr lsrs LL!"
console.log(removeVowels("Hello World!"));                   // Output: "Hll Wrld!"
console.log(removeVowels("AEIOU aeiou"));                    // Output: ""

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - n = length of the input string
 * - replace() with a regex scans through all characters once → O(n)
 *
 * Space Complexity: O(n)
 * - A new string is created with vowels removed → O(n)
 * - Extra memory grows linearly with input size
 *
 * Explanation:
 * - Time Complexity answers: "How long will it take as the string grows?"
 * - Space Complexity answers: "How much extra memory is needed as the string grows?"
 * -------------------------------------------------------------------------
 */
