/**
  * Problem: 104. Maximum Depth of Binary Tree
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
  * Runtime: 64 ms, faster than 87.01%
  * Space: 36.8 MB, less than 89.25%
*/
var maxDepth = function(root) {
    if (!root) return 0;
    let left = maxDepth(root.left), right = maxDepth(root.right);
    return (left > right) ? ++left : ++right;
};