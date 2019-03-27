/**
  * Problem: 27. Remove Element
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/remove-element/
  * Runtime: 60 ms, faster than 89.60%
  * Space: 33.7 MB, less than 55.71%
*/
var removeElement = function(nums, val) {
    let valIdx, len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] == val) {
            if (valIdx == undefined) valIdx = i;
        } else if (valIdx != undefined) {
            nums[valIdx] = nums[i];
            valIdx++;
        }
    }
    if (valIdx != undefined) return valIdx;
    return len;
};