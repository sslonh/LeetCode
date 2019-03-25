/**
  * Problem: 283. Move Zeroes
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/move-zeroes/
  * Runtime: 64 ms, faster than 96.71%
  * Space: 35.7 MB, less than 51.77%
*/
var moveZeroes = function(nums) {
    let zeroIdx, num, len = nums.length;
    for (let i = 0; i < len; i++) {
        num = nums[i];
        if (!num) {
            if (zeroIdx == undefined) zeroIdx = i;
        } else if (zeroIdx != undefined) {
            nums[zeroIdx] = num;
            nums[i] = 0;
            zeroIdx++;
        }
    }
};