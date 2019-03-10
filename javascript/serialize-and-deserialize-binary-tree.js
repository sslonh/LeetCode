/**
  * Problem: 297. Serialize and Deserialize Binary Tree
  * Difficulty: Hard
  * Link: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
  * Runtime: 100 ms, faster than 81.06%
  * Space: 43 MB, less than 93.55%
*/
var serialize = function(root) {
    let stack = [root], node, vals = [];
    while (stack.length) {
        node = stack.shift();
        if (node) {
            vals.push(node.val);
            stack.push(node.left);
            stack.push(node.right);
        } else {
            vals.push('#');
        }
    }
    return vals.join(' ');
};

var deserialize = function(data) {
    let nodes = data.split(' '), curr, idx = 0;
    let head = getNode(nodes[idx]);
    if (!head) return null;
    let stack = [head];
    while (stack.length) {
        curr = stack.shift();
        curr.left = getNode(nodes[++idx]);
        if (curr.left) stack.push(curr.left);
        curr.right = getNode(nodes[++idx]);
        if (curr.right) stack.push(curr.right);
    }
    return head;
};

var getNode = function(val) {
    return (val == '#') ? null : new TreeNode(parseInt(val));
}