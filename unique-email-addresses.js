/**
  * Problem: 929. Unique Email Addresses
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/unique-email-addresses/
  * Runtime: 72 ms, faster than 93.70%
  * Space: 38.4 MB, less than 100.00%
*/
var numUniqueEmails = function(emails) {
    let len = emails.length, map = new Map(), dotReg = /\./g;
    for (let i = 0; i < len; i++) {
        let email = emails[i];
        let atIndex = email.indexOf('@');
        let local = email.substring(0, atIndex);
        let domain = email.substring(atIndex);
        let plusIndex = local.indexOf('+');
        if (plusIndex != -1) local = local.substring(0, plusIndex);
        map.set(local.replace(dotReg,'') + domain);
    }
    return map.size;
};