/**
 * Reverses the given string.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
const reverseString = str => str.split('').reverse().join('');

// Example usage of the reverseString function
const result = reverseString('Hello, World!');

// Print the result
console.log(result); // Output: !dlroW ,olleH
