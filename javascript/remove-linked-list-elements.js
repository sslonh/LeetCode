/**
  * Problem: 203. Remove Linked List Elements
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/remove-linked-list-elements/
  * Runtime: 76 ms, faster than 94.98%
  * Space: 36.8 MB, less than 68.42%
  * Time Complexity: O(n)
*/
var removeElements = function(head, val) {
    let curr = head, prev;
    while (curr) {
        if (curr.val == val) {
            if (prev) {
                prev.next = curr.next;
            } else {
                head = curr.next;
            }
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
};