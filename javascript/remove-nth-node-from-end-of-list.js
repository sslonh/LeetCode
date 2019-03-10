/**
  * Problem: 19. Remove Nth Node From End of List
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
  * Runtime: 60 ms, faster than 85.60%
  * Space: 34.1 MB, less than 27.45%
  * Time Complexity: O(n)
  * Comments: Using two pointers, we only iterate through each list node once.
*/
var removeNthFromEnd = function(head, n) {
    let curr = head, adv = head, prev;
    while (n > 0) {
        adv = adv.next;
        n--;
    }
    while (adv) {
        adv = adv.next;
        prev = curr;
        curr = curr.next;
    }
    if (!prev) return curr.next;
    prev.next = curr.next;
    return head;
};