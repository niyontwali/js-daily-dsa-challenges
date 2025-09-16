/**
 * Problem:
 * Calculate the sum of all numbers in a given array.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: 15
 *
 * Approach:
 * - Use Array.prototype.reduce to iterate through the array.
 * - The accumulator (`sum`) keeps a running total.
 * - The current value (`current`) is added to the accumulator at each step.
 */

const sumOfArrayItems = (numbers) => {
  return numbers.reduce((sum, current) => {
    // sum: accumulated total so far
    // current: the current number in the array
    return sum + current; // Add current number to the running total
  }, 0); // Start the accumulator at 0
};

// -------------------------------------------------------------------------
// Example usage
// -------------------------------------------------------------------------
const result = sumOfArrayItems([1, 2, 3, 4, 5]);
console.log(result); // Output: 15

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - n = number of elements in the array
 * - reduce iterates through the array once → runtime proportional to n
 *
 * Space Complexity: O(1)
 * - Only a single accumulator variable is used (`sum`)
 * - Memory usage does not grow with input size
 *
 * More Explanation
 * - Time Complexity answers: "How long will this function take as input grows?"
 * - Space Complexity answers: "How much extra memory is needed as input grows?"
 * - Using `reduce` is a concise functional way to compute sums.
 * -------------------------------------------------------------------------
 */
