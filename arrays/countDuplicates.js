/**
 * Problem:
 * Given an array of numbers, find all elements that appear more than once
 * and return an object where keys are the duplicated numbers and values
 * are the count of how many times each duplicate appears.
 *
 * Example:
 * Input: [1,2,3,4,4,4,5,6,6,8,8,8]
 * Output: { '4': 3, '6': 2, '8': 3 }
 */

const countDuplicates = (numbers) => {
  // Step 1: Count how many times each number appears
  const numberCounts = {}; // Object to store counts for each number

  // Time complexity: O(n) → we go through each number exactly once
  for (const number of numbers) {
    // Increment count if exists, otherwise initialize to 1
    numberCounts[number] = (numberCounts[number] || 0) + 1;
  }

  // Step 2: Collect numbers that appear more than once
  const duplicates = {}; // Object to store only duplicates

  // Time complexity: O(k), where k = number of unique numbers
  // In the worst case, every number is unique, so k ≈ n → O(n)
  for (const number in numberCounts) {
    if (numberCounts[number] > 1) {
      duplicates[number] = numberCounts[number];
    }
  }

  // Step 3: Return duplicates object
  return duplicates;
};

// -------------------------------------------------------------------------
// Example usage
// -------------------------------------------------------------------------
console.log(countDuplicates([1,2,3,4,4,4,5,6,6,8,8,8]));
// Output: { '4': 3, '6': 2, '8': 3 }

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - First loop: iterate through all n elements → O(n)
 * - Second loop: iterate through all unique numbers (at most n) → O(n)
 * - Total: O(n + n) → O(n)
 *
 * Space Complexity: O(n)
 * - numberCounts stores counts for up to n unique numbers → O(n)
 * - duplicates stores duplicates (at most n numbers) → O(n)
 *
 * Explanation for Students:
 * - Time Complexity answers: "How does runtime increase if the input grows?"
 * - Space Complexity answers: "How much extra memory is needed if input grows?"
 * -------------------------------------------------------------------------
 */
