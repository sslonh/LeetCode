/**
  * Problem: 100. Same Tree
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/same-tree/
  * Runtime: 56 ms, faster than 74.92%
  * Space: 33.8 MB, less than  39.60%
*/
var isSameTree = function(p, q) {
    let result = true;
    function dfs(node1, node2) {
        if (!node1 && !node2) return;
        if (!node1 || !node2 || node1.val != node2.val) {
            result = false;
            return;
        }
        dfs(node1.left, node2.left);
        dfs(node1.right, node2.right);
    }
    dfs(p, q);
    return result;
};