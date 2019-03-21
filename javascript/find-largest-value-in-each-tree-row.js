/**
  * Problem: 515. Find Largest Value in Each Tree Row
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/find-largest-value-in-each-tree-row/
  * Runtime: 72 ms, faster than 94.51%
  * Space: 37.9 MB, less than 92.86%
*/
var largestValues = function(root) {
    let vals = [];
    
    function traverse(node, level) {
        if (!node) return;
        if (vals[level] == undefined || node.val > vals[level]) vals[level] = node.val;
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    
    traverse(root, 0);
    return vals;
};