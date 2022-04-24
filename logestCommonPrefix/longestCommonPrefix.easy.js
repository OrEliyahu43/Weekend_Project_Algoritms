/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {

    let LongPrefix = "";
    let isCheckOver = false;
    let indexChar = 0;
    let testChar = strs[0][indexChar];
    while (!isCheckOver) {
        for (let index = 0; index < strs.length; index++) {
            let checkedChar = strs[index][indexChar]
            if (testChar !== checkedChar) {
                isCheckOver = true;
            }

        }
        if (!isCheckOver) {
            LongPrefix += testChar;
            indexChar++;
            testChar = strs[0][indexChar];
        }
    }
    return LongPrefix;

};
module.exports = longestCommonPrefix;
