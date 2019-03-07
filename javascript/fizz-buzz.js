/**
  * Problem: 412. Fizz Buzz
  * Difficulty: Easy
  * Link: https://leetcode.com/problems/fizz-buzz/
  * Runtime: 64 ms, faster than 97.34%
  * Space: 37 MB, less than 91.41%
*/
var fizzBuzz = function(n) {
    let result = new Array(n), counter = 0;
    for (let i = 1; i <= n; i++) {
        let isDivisibleByThree = i % 3 == 0;
        let isDivisibleByFive = i % 5 == 0;
        if (isDivisibleByThree && isDivisibleByFive) result[counter] = 'FizzBuzz';
        else if (isDivisibleByThree) result[counter] = 'Fizz';
        else if (isDivisibleByFive) result[counter] = 'Buzz';
        else result[counter] = `${i}`;
        counter++;
    }
    return result;
};