/**
 * Challenge: Longest Substring Without Repeating Characters
 * 
 * Problem:
 * Given a string `s`, find the length of the **longest substring** without repeating characters.
 * 
 * Definition (Sliding Window):
 * A sliding window is a technique for efficiently handling problems with contiguous subarrays or substrings.
 * - Imagine a "window" that covers a portion of the string or array, defined by two pointers (`left` and `right`).  
 * - You **expand** the window by moving the right pointer and **shrink** it by moving the left pointer when necessary.
 * - This avoids repeatedly checking the same elements and allows O(n) solutions for problems that would otherwise be O(n²).
 * 
 * Example Test Cases:
 * s = "abcabcbb" → Output: 3
 *   Explanation: The longest substring without repeating characters is "abc", length = 3
 * 
 * s = "bbbbb" → Output: 1
 *   Explanation: The longest substring without repeating characters is "b", length = 1
 * 
 * s = "pwwkew" → Output: 3
 *   Explanation: The longest substring without repeating characters is "wke", length = 3
 * 
 * -------------------------------------------------------------------------
 * Approach (Sliding Window + Set):
 * - Use two pointers (`left` and `right`) to represent the current window of characters.
 * - Use a Set to track characters currently in the window.
 * - Move the `right` pointer to expand the window.
 * - If a duplicate character is found, move the `left` pointer forward until the duplicate is removed.
 * - Update `maxLength` with the current window size whenever a new character is added.
 * -------------------------------------------------------------------------
 */

const lengthOfLongestSubstring = (s) => {
  const seenChars = new Set(); // Tracks characters in the current window
  let left = 0;                // Left pointer of the sliding window
  let maxLength = 0;           // Stores the maximum length found

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If currentChar is already in the set, shrink the window from the left
    while (seenChars.has(currentChar)) {
      seenChars.delete(s[left]); // Remove the leftmost character
      left++;                     // Move left pointer forward
    }

    // Add the current character to the set
    seenChars.add(currentChar);

    // Update maxLength if current window is larger
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// -------------------------------------------------------------------------
// Example usage and testing
// -------------------------------------------------------------------------
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - Each character is visited at most twice:
 *   1. When the `right` pointer adds it to the set.
 *   2. When the `left` pointer removes it from the set.
 * - Runtime grows linearly with input size n.
 *
 * Space Complexity: O(min(n, m))
 * - Store characters in a Set for the current window.
 * - n = length of string, m = size of the character set.
 *
 * More Explanations:
 * - Sliding window allows efficient tracking of unique characters without checking all substrings.
 * - Set provides O(1) lookup for duplicates.
 * - This approach avoids the naive O(n²) method of checking all possible substrings.
 * -------------------------------------------------------------------------
 */
