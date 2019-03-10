/**
  * Problem: 369. Plus One Linked List
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/plus-one-linked-list/
  * Runtime: 60 ms, faster than 84.21%
  * Space: 33.8 MB, less than 100%
  * Time Complexity: O(n)
*/
var plusOne = function(head) {
    let curr = head, rem = 1;
    while (curr.next) {
        curr.next.prev = curr;
        curr = curr.next;
    }
    while (curr && rem) {
        if (curr.val > 8) {
            curr.val = 0;
            rem = 1;
        } else {
            curr.val += 1;
            rem = 0;
        }
        curr = curr.prev;
    }
    if (!rem) return head;
    let newNode = new ListNode(1);
    newNode.next = head;
    return newNode;
};