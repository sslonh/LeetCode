/**
  * Problem: 387. First Unique Character in a String
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/first-unique-character-in-a-string/
  * Runtime: 72 ms, faster than 98.55%
  * Space: 37.8 MB, less than 74.65%
*/
var firstUniqChar = function(s) {
    let len = s.length, map = new Map();
    for (let i = 0; i < len; i++) {
        let char = s[i];
        if (map.has(char)) continue;
        if (s.indexOf(char, i + 1) == -1) return i;
        map.set(char);
    }
    return -1;
};