/**
 * Calculates the sum of all items in an array.
 *
 * @param {number[]} arr - The array of numbers to sum.
 * @returns {number} The sum of all items in the array.
 */
const sumOfArrayItems = arr => arr.reduce((sum, current) => sum + current, 0);

// Example usage of the sumOfArrayItems function
const result = sumOfArrayItems([1, 2, 3, 4, 5]);

// Print the result
console.log(result); // output 15
