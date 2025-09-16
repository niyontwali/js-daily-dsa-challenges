/**
 * Problem:
 * Create a secret message system with encoding and decoding.
 *
 * Encoding Rules:
 * 1. Shift each letter forward by `shiftValue` in the alphabet.
 * 2. Preserve uppercase/lowercase letters.
 * 3. Leave spaces, punctuation, and numbers unchanged.
 * 4. After every 2 characters, insert a random letter.
 *
 * Decoding Rules:
 * 1. Remove the random letters (every 3rd character).
 * 2. Shift letters backward by `shiftValue` to recover the original message.
 *
 * Example:
 * Input: "Hello World!", shiftValue = 3
 * Encrypted (example): "Khoor Zruog!" with random letters inserted
 * Decrypted: "Hello World!"
 *
 * Approach:
 * - Use modulo arithmetic to wrap letters around the alphabet.
 * - Use arrays to manipulate characters easily.
 * - Split logic into two functions: encrypt() and decrypt().
 */

const alphabet = "abcdefghijklmnopqrstuvwxyz";

/**
 * Encrypts a message with a given shift value.
 *
 * @param {string} message - Original message to encrypt
 * @param {number} shiftValue - Number of letters to shift
 * @returns {string} - Encrypted message with random letters inserted
 */
function encrypt(message, shiftValue) {
  const chars = message.split(""); // Convert string to array for easy manipulation

  // Step 1: Shift letters
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const lower = ch.toLowerCase();

    // Only shift letters (ignore numbers, punctuation, spaces)
    if (alphabet.includes(lower)) {
      const oldIndex = alphabet.indexOf(lower);
      // Use modulo to wrap around alphabet
      const newIndex = (oldIndex + (shiftValue % 26) + 26) % 26;
      let newChar = alphabet[newIndex];
      if (ch === ch.toUpperCase()) newChar = newChar.toUpperCase();
      chars[i] = newChar;
    }
  }

  // Step 2: Insert random letters after every 2 characters
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    count++;
    if (count === 2) {
      const randomLetter = alphabet[Math.floor(Math.random() * 26)];
      chars.splice(i + 1, 0, randomLetter); // Insert random letter
      i++; // Skip the inserted letter
      count = 0;
    }
  }

  return chars.join(""); // Convert array back to string
}

/**
 * Decrypts an encrypted message using the same shift value.
 *
 * @param {string} encryptedMessage - The message to decrypt
 * @param {number} shiftValue - The same shift value used during encryption
 * @returns {string} - Original message
 */
function decrypt(encryptedMessage, shiftValue) {
  const chars = encryptedMessage.split("");

  // Step 1: Remove random letters (every 3rd character)
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    count++;
    if (count === 3) {
      chars.splice(i, 1); // Remove the random letter
      i--; // Adjust index after removal
      count = 0;
    }
  }

  // Step 2: Shift letters backward
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const lower = ch.toLowerCase();

    if (alphabet.includes(lower)) {
      const oldIndex = alphabet.indexOf(lower);
      const newIndex = (oldIndex - (shiftValue % 26) + 26) % 26; // Wrap backward
      let newChar = alphabet[newIndex];
      if (ch === ch.toUpperCase()) newChar = newChar.toUpperCase();
      chars[i] = newChar;
    }
  }

  return chars.join("");
}

// -------------------------------------------------------------------------
// Example usage
// -------------------------------------------------------------------------
const encrypted = encrypt("Hello World!", 3);
console.log("Encrypted:", encrypted);

const decrypted = decrypt(encrypted, 3);
console.log("Decrypted:", decrypted); // "Hello World!"

/**
 * -------------------------------------------------------------------------
 * Efficiency Analysis:
 *
 * Time Complexity: O(n)
 * - n = length of the input message
 * - First loop (shifting letters) → O(n)
 * - Second loop (inserting random letters) → O(n) in practice (splice is O(1) amortized for few insertions)
 * - Third loop (removing random letters) → O(n)
 * - Fourth loop (shifting back for decryption) → O(n)
 * - Total: O(n) → linear in message length
 *
 * Space Complexity: O(n)
 * - Arrays created from strings and new strings returned → O(n)
 *
 * More Explanation:
 * - Modulo (%) is used to wrap around the alphabet.
 * - Using arrays allows easy insertion and removal of characters.
 * - Random letters make the message harder to guess but are removed during decryption.
 * -------------------------------------------------------------------------
 */
