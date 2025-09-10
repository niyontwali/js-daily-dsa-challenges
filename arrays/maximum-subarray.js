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
const maxSubArray = nums => {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// Example usage and testing
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([1]));                      // Output: 1
console.log(maxSubArray([5,4,-1,7,8]));             // Output: 23
