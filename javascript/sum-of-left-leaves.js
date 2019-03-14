/**
  * Problem: 404. Sum of Left Leaves
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/sum-of-left-leaves/
  * Runtime: 60 ms, faster than 79.94%
  * Space: 34.1 MB, less than  72.73%
  * Time Complexity: O(n)
*/
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    if (root.left && !root.left.left && !root.left.right) {
        return root.left.val + sumOfLeftLeaves(root.right);
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};