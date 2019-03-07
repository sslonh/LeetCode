/**
  * Problem: 66. Plus One
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/plus-one/
  * Runtime: 56 ms, faster than 83.78%
  * Space: 33.2 MB, less than 100%
*/
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            break;
        }
    }
    if (digits[0] == 0) digits.unshift(1);
    return digits;
};