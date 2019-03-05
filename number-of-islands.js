/**
  * Problem: 200. Number of Islands
  * Difficulty: Medium
  * Link: https://leetcode.com/problems/number-of-islands/
  * Runtime: 68 ms, faster than 73.25%
  * Space: 37.3 MB, less than 98.43%
*/
var numIslands = function(grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    let rowL = grid.length - 1, colL = grid[0].length - 1, result = 0;
    
    function traverse(row,column) {
        if (row < 0 || row > rowL || column < 0 || column > colL || grid[row][column] == '0') {
            return;
        }
        grid[row][column] = '0';
        traverse(row - 1, column);
        traverse(row + 1, column);
        traverse(row, column - 1);
        traverse(row, column + 1);
    }
    
    for (let r = 0; r <= rowL; r++) {
        for (let c = 0; c <= colL; c++) {
            if (grid[r][c] == '1') {
                result++;
                traverse(r,c);
            }
        }
    }
    
    return result;
};