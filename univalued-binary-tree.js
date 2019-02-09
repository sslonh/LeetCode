/**
  * Problem: 965. Univalued Binary Tree
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/univalued-binary-tree/
  * Runtime: 68 ms, faster than 100.00%
*/
var isUnivalTree = function(root) {
    if (!root) return true;
    let val = root.val;
    function isUnival(node) {
        if (!node) return true;
        if (node.val != val) return false;
        return isUnival(node.left) && isUnival(node.right);
    }
    return isUnival(root.left) && isUnival(root.right);
};