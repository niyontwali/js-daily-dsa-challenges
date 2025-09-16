/**
 * Problem: Given an integer array `nums`, find the contiguous subarray 
 * (containing at least one number) which has the largest sum and return its sum.
 * 
 * Example Test Inputs:
 * nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Expected Output: 6
 * Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6
 * 
 * nums = [1]
 * Expected Output: 1
 * 
 * nums = [5,4,-1,7,8]
 * Expected Output: 23
 */

const maxSubArray = (nums) => {
  // Initialize with the first element because:
  // - At least one element always exists (per problem statement).
  // - This gives us a starting baseline to compare against.
  let currentSum = nums[0]; 
  let maxSum = nums[0];     

  // Process the array from the second element onward
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    /**
     * Here’s the key logic:
     * - We decide whether to "extend" the current subarray or "restart" from this element.
     * - If currentSum + num is bigger, then extending is better.
     * - If num alone is bigger, then restarting is better.
     * 
     * Why restart? Because if the sum we’ve been carrying (currentSum) is negative,
     * it will only drag down the new number. Starting fresh gives a higher sum.
     */
    currentSum = Math.max(num, currentSum + num);

    // Compare with the best sum we’ve seen so far (global max)
    maxSum = Math.max(maxSum, currentSum);
  }

  // After scanning all elements, maxSum holds the largest subarray sum
  return maxSum;
};

/**
 * Efficiency Analysis:
 * --------------------
 * Time Complexity: O(n)
 * - "n" is the number of elements in the array.
 * - We scan through the array once, left to right.
 * - Each step does a constant amount of work (a few comparisons/additions).
 * - Runtime grows *proportionally* to input size.
 * 
 * Space Complexity: O(1)
 * - We use only two main variables (`currentSum` and `maxSum`).
 * - Memory use does NOT grow with input size.
 * - Therefore, memory usage is constant.
 */

// Example usage and testing
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([1]));                      // Output: 1
console.log(maxSubArray([5,4,-1,7,8]));             // Output: 23
