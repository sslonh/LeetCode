/**
  * Problem: 814. Binary Tree Pruning
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/binary-tree-pruning/
  * Runtime: 56 ms, faster than 86.74%
  * Space: 33.7 MB, less than 80.95%
*/
var pruneTree = function(root) {
    
    function traverse(node) {
        if (!node) return 0;
        let left = traverse(node.left);
        let right = traverse(node.right);
        if (!left) node.left = null;
        if (!right) node.right = null;
        return node.val || left || right;
    }
    
    traverse(root);
    return root;
};