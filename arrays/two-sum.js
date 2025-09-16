/**
 * Problem:
 * Given an array of integers `nums` and an integer `target`,
 * return the indices of the two numbers such that they add up to `target`.
 * Each input has exactly one solution, and you may not use the same element twice.
 *
 * Example Test Cases:
 * nums = [2, 7, 11, 15], target = 9 → Output: [0, 1] (2 + 7 = 9)
 * nums = [3, 2, 4], target = 6 → Output: [1, 2] (2 + 4 = 6)
 * nums = [3, 3], target = 6 → Output: [0, 1] (3 + 3 = 6)
 *
 * Approach:
 * - Use a hash map (Map) to store numbers and their indices while iterating.
 * - For each number, calculate its complement: complement = target - current number.
 * - If the complement exists in the map, we found the two numbers.
 * - Otherwise, store the current number in the map and continue.
 * - This ensures we find the solution in a single pass.
 */

const twoSum = (numbers, target) => {
  const numToIndex = new Map(); // Map to store number -> its index

  // Loop through each number in the array
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const complement = target - current; // Number needed to reach the target

    // Check if complement already exists in the map
    if (numToIndex.has(complement)) {
      // Found the two numbers: return their indices
      return [numToIndex.get(complement), i];
    }

    // Store current number and its index in the map
    numToIndex.set(current, i);
  }

  // Return empty array if no solution found (the problem guarantees a solution)
  return [];
};

// -------------------------------------------------------------------------
// Example usage
// -------------------------------------------------------------------------
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - We loop through the array once → O(n)
 * - Each lookup in the Map is O(1) on average
 * - Total runtime grows linearly with the input size
 *
 * Space Complexity: O(n)
 * - We store each number and its index in the Map → O(n)
 * - Extra memory grows linearly with the number of elements
 *
 * More Explanation:
 * - Time Complexity answers: "How long will the function take if the array grows?"
 * - Space Complexity answers: "How much extra memory is needed as the array grows?"
 * - Using a Map allows us to find the solution efficiently in a single pass,
 *   instead of checking all pairs (which would be O(n²)).
 * -------------------------------------------------------------------------
 */
