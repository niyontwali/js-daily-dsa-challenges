/**
 * Problem: Find the First Non-Repeating Character in a String
 *
 * Description:
 * Given a string `s`, find the first character that does not repeat anywhere in the string.
 * Return its index. If it doesn’t exist, return -1.
 *
 * Example Test Cases:
 * Input: "leetcode"
 * Output: 0
 * Explanation: 'l' is the first non-repeating character.
 *
 * Input: "loveleetcode"
 * Output: 2
 * Explanation: 'v' is the first non-repeating character.
 *
 * Input: "aabb"
 * Output: -1
 * Explanation: There are no non-repeating characters.
 *
 * Constraints:
 * - The string consists of lowercase English letters only.
 * - The string length is at most 10^5.
 *
 * -------------------------------------------------------------------------
 * Approach:
 * 1. Count occurrences of each character using an object (or Map).
 * 2. Scan the string again and return the index of the first character with count 1.
 * -------------------------------------------------------------------------
 */

const firstNonRepeatingChar = (s) => {
  const charCounts = {}; // Object to store counts of each character

  // Step 1: Count occurrences of each character
  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Step 2: Find the first character with count 1
  for (let i = 0; i < s.length; i++) {
    if (charCounts[s[i]] === 1) {
      return i; // Return the index of the first non-repeating character
    }
  }

  // If no non-repeating character exists
  return -1;
};

// -------------------------------------------------------------------------
// Example usage
// -------------------------------------------------------------------------
console.log(firstNonRepeatingChar("leetcode"));      // Output: 0
console.log(firstNonRepeatingChar("loveleetcode"));  // Output: 2
console.log(firstNonRepeatingChar("aabb"));          // Output: -1

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - First loop: counts characters in O(n) time.
 * - Second loop: finds first non-repeating character in O(n) time.
 * - Total: O(n + n) → O(n), proportional to input size.
 *
 * Space Complexity: O(1)
 * - Only 26 lowercase letters are possible, so charCounts is at most 26 entries.
 * - Memory usage does not grow with input size beyond these 26 letters.
 *
 * More Explanation:
 * - Time complexity measures how the runtime grows with input size.
 * - Space complexity measures how memory usage grows with input size.
 * -------------------------------------------------------------------------
 */
