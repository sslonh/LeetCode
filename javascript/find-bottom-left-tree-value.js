/**
  * Problem: 513. Find Bottom Left Tree Value
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/find-bottom-left-tree-value/
  * Runtime: 68 ms, faster than 92.61%
  * Space: 37.1 MB, less than 100%
*/
var findBottomLeftValue = function(root) {
    if (!root) return null;
    let result = root.val, resultLevel = 1;
    
    function traverse(node, level) {
        if (!node.left && !node.right && level > resultLevel) {
            result = node.val;
            resultLevel = level;
        }
        if (node.left) traverse(node.left, level + 1);
        if (node.right) traverse(node.right, level + 1);
    }
    
    traverse(root, 1);
    return result;
};