/**
  * Problem: 965. Univalued Binary Tree
  * Link: https://leetcode.com/problems/univalued-binary-tree/
  * Runtime: 68 ms
  * 100%
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