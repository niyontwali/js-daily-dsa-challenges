/**
 * Problem:
 * Given a string, return a new string with the characters in reverse order.
 *
 * Example:
 * Input: "Hello, World!"
 * Output: "!dlroW ,olleH"
 *
 * Approach:
 * - Use JavaScript’s built-in methods to reverse the string in a single line:
 *   1. split('') → converts string into an array of characters
 *   2. reverse() → reverses the array
 *   3. join('') → joins the array back into a string
 */

const reverseString = (inputString) => {
  // One-line operation using split, reverse, and join
  return inputString.split('').reverse().join('');
};

// -------------------------------------------------------------------------
// Example usage
// -------------------------------------------------------------------------
const result = reverseString('Hello, World!');
console.log(result); // Output: !dlroW ,olleH

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - split() iterates through all characters → O(n)
 * - reverse() iterates through the array once → O(n)
 * - join() iterates through the array once → O(n)
 * - Total: O(3n) → simplified to O(n)
 *
 * Space Complexity: O(n)
 * - split() creates an array of n characters → O(n)
 * - join() creates a new string of length n → O(n)
 * - Total extra memory proportional to input size → O(n)
 *
 * More Explanation:
 * - Time Complexity answers: "How long will the function take if the string grows?"
 * - Space Complexity answers: "How much extra memory is needed as the string grows?"
 * -------------------------------------------------------------------------
 */

