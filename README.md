# JS Daily DSA Challenges

Welcome to the **JS Daily DSA Challenges** repository! This project is designed to provide daily coding challenges
focused on JavaScript Data Structures and Algorithms (DSA) to help developers of all levels improve their skills. Each
day, a new challenge will be added to the repository, and contributors are welcome to submit their solutions or new
challenges via PRs.

## How It Works

1. **Daily Challenges**: A new DSA challenge will be added to the repository every day. Each challenge will be
   categorized into a relevant folder (e.g., `strings`).
2. **Contributing**: Contributors can submit their solutions to the challenges or propose new challenges by creating a
   Pull Request (PR).

## Folder Structure

The repository follows a structured format to keep things organized:

```
/category
  - challenge-title.js
```

- `category`: The category of the challenge (e.g., `strings`, `arrays`).
- `challenge-title.js`: Contains the solution to the challenge, with the full description and requirements of the
  challenge included in the comments.

## Example Folder Structure

```
/challenges
  /strings
    - reverseString.js
  /arrays
    - sumOfArrayItems.js
```

## Example Challenge File (`reverseString.js`)

```javascript
/**
 * Challenge: Reverse a String
 *
 * Description:
 * Write a function `reverseString` that takes a string as an input and returns the string reversed.
 *
 * Example:
 * Input: "Hello, World!"
 * Output: "!dlroW ,olleH"
 *
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */

const reverseString = str => str.split('').reverse().join('');

// Example usage:
const result = reverseString('Hello, World!');
console.log(result); // Output: !dlroW ,olleH
```

## Getting Started

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/niyontwali/daily-dsa-challenges.git
   ```

2. **Navigate to the Challenges Directory**:

   ```sh
   cd daily-dsa-challenges
   ```

3. **Explore the Challenges**: Open the relevant category folder to find the challenges.

## Contributing Guidelines

We welcome contributions from everyone. Here are some guidelines to get you started:

1. **Fork the Repository**: Click the "Fork" button at the top right corner of this page to fork this repository.
2. **Create a Branch**: Create a new branch for your contribution.
   ```sh
   git checkout -b my-new-challenge
   ```
3. **Add Your Challenge or Solution**:
   - If adding a challenge, create a new file named with the title of the challenge (e.g., `reverseString.js`) in the
     relevant category folder and include the challenge description in the comments.
   - If submitting a solution, navigate to the respective challenge file and add your solution.
4. **Commit Your Changes**:
   ```sh
   git commit -m "Add new challenge/solution: reverseString"
   ```
5. **Push to Your Fork**:
   ```sh
   git push origin my-new-challenge
   ```
6. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your fork.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact us at
[john@techquestltd.com](mailto:john@techquestltd.com) or write to me via
[LinkedIn](https://www.linkedin.com/in/john-niyontwali-816549111/)

Happy coding!
