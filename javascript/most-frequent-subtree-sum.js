/**
  * Problem: 508. Most Frequent Subtree Sum
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/most-frequent-subtree-sum/
  * Runtime: 72 ms, faster than 100%
  * Space: 37.9 MB, less than 100%
*/
var findFrequentTreeSum = function(root) {
    if (!root) return [];
    let map = new Map(), max = 0, sum, results = [];
    
    function traverse(node) {
        if (!node) return 0;
        sum = node.val + traverse(node.left) + traverse(node.right);
        if (!map.has(sum)) {
            map.set(sum, 1);
        } else {
            map.set(sum, map.get(sum) + 1);
        }
        return sum;
    }
    
    traverse(root);
    
    map.forEach((val,key) => {
       if (val > max) {
           max = val;
           results = [key];
       } else if (val == max) {
           results.push(key);
       }
    });

    return results;
};