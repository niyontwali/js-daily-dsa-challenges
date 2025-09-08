/**
 * Challenge: Secret Message Encoder & Decoder
 *
 * Description:
 * Imagine you want to send a secret message to a friend. You’ll create a simple system to
 * "scramble" the message so that only someone who knows the rules can "unscramble" it.
 *
 * The rules for encoding are:
 * 1. Shift every letter in the message forward by a certain number (`shiftValue`) in the alphabet.
 *    - Example: shiftValue = 3
 *      - 'a' → 'd'
 *      - 'b' → 'e'
 *      - 'z' → 'c' (wraps around)
 * 2. Keep uppercase letters uppercase, and lowercase letters lowercase.
 * 3. Do not change spaces, punctuation, or numbers.
 * 4. After every 2 characters, insert a random extra letter (to make the message harder to guess).
 *
 * The rules for decoding are:
 * 1. Remove the random letters that were inserted (every 3rd character).
 * 2. Shift each letter backward by the same `shiftValue` to get the original message.
 *
 * Example:
 * Input: message = "Hi!", shiftValue = 2
 * Possible Encrypted: "Jkmk!"  (your output will vary because of random letters)
 * Decrypted: "Hi!"
 *
 * Requirements:
 * - Use modulo (%) math so letters wrap around the alphabet correctly.
 * - Ensure decoding gives back the original message.
 *
 * Functions to Implement:
 * - encrypt(message, shiftValue)
 * - decrypt(encryptedMessage, shiftValue)
 *
 * Hints:
 * - Use `split("")` and `join("")` to work with strings as arrays of characters.
 * - Use `splice()` to insert/remove characters at specific positions.
 * - Use `toLowerCase()` to simplify alphabet checks.
 */

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  let chars = message.split("");

  for (let i = 0; i < chars.length; i++) {
    let ch = chars[i];
    let lower = ch.toLowerCase();

    if (alphabet.includes(lower)) {
      let oldIndex = alphabet.indexOf(lower);
      let newIndex = (oldIndex + (shiftValue % 26) + 26) % 26;
      let newChar = alphabet[newIndex];
      if (ch === ch.toUpperCase()) newChar = newChar.toUpperCase();
      chars[i] = newChar;
    }
  }

  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    count++;
    if (count === 2) {
      let randomLetter = alphabet[Math.floor(Math.random() * 26)];
      chars.splice(i + 1, 0, randomLetter);
      i++;
      count = 0;
    }
  }

  return chars.join("");
}

function decrypt(encryptedMessage, shiftValue) {
  let chars = encryptedMessage.split("");

  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    count++;
    if (count === 3) {
      chars.splice(i, 1);
      i--;
      count = 0;
    }
  }

  for (let i = 0; i < chars.length; i++) {
    let ch = chars[i];
    let lower = ch.toLowerCase();
    if (alphabet.includes(lower)) {
      let oldIndex = alphabet.indexOf(lower);
      let newIndex = (oldIndex - (shiftValue % 26) + 26) % 26;
      let newChar = alphabet[newIndex];
      if (ch === ch.toUpperCase()) newChar = newChar.toUpperCase();
      chars[i] = newChar;
    }
  }

  return chars.join("");
}

// Example usage:
const encrypted = encrypt("Hello World!", 3);
console.log("Encrypted:", encrypted);

const decrypted = decrypt(encrypted, 3);
console.log("Decrypted:", decrypted); // "Hello World!"
