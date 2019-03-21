/**
  * Problem: 938. Range Sum of BST
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/range-sum-of-bst/
  * Runtime: 76 ms, faster than 88.38%
  * Space: 67.1 MB, less than 46.40%
*/
var rangeSumBST = function(root, L, R) {
    if (!root) return 0;
    if (root.val > R) return rangeSumBST(root.left, L, R);
    if (root.val < L) return rangeSumBST(root.right, L, R);
    return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};