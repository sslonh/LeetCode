/**
  * Problem: 226. Invert Binary Tree
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/invert-binary-tree/
  * Runtime: 56 ms, faster than 80.62%
  * Space: 33.7 MB, less than 82.72%
  * Time Complexity: O(n)
  * Comments: This is your typical tree traversal problem. Just use DFS or BFS and swap each child node.
*/
var invertTree = function(root) {
    let tmp;
    function invert(node) {
        if (node.left) invert(node.left);
        if (node.right) invert(node.right);
        tmp = node.left;
        node.left = node.right;
        node.right = tmp;
    }
    if (root) invert(root);
    return root;
};