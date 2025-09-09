/**
 * Problem: Given an array of integers `nums` and an integer `target`,
 * return the indices of the two numbers such that they add up to target.
 * Assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * Example Test Input:
 * nums = [2, 7, 11, 15], target = 9
 * Expected Output: [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
 *
 * nums = [3, 2, 4], target = 6
 * Expected Output: [1, 2]
 *
 * nums = [3, 3], target = 6
 * Expected Output: [0, 1]
 */
const twoSum = (nums, target) => {
  const map = new Map(); // store number -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

// Example usage and testing
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]
