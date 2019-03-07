/**
  * Problem: 987. Vertical Order Traversal of a Binary Tree
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
  * Runtime: 72 ms, faster than 100.00%
  * Space: 16 MB, less than 100.00%
*/
var verticalTraversal = function(root) {
    let map = new Map(), result = [];
    function traverse(node, row, column) {
        if (!map.has(column)) map.set(column, []);
        map.get(column).push({ val: node.val, row });
        if (node.left) traverse(node.left, row + 1, column - 1);
        if (node.right) traverse(node.right, row + 1, column + 1);
    }
    if (root) {
        traverse(root, 0, 0);
        let keys = Array.from(map.keys()).sort((a,b) => a-b);
        for (let i = 0; i < keys.length; i++) {
            let arr = map.get(keys[i]);
            arr.sort((a,b) => { 
                return a.row-b.row || a.val-b.val 
            });
            result.push(arr.map(x => x.val));
        }
    }
    return result;
};