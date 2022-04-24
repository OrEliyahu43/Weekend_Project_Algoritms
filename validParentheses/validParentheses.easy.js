/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {

    let stack = [];
    for(let i = 0 ; i<s.length;i++){
        let char = stack[stack.length-1];
        if(s[i] === "(" || s[i]=== "{" || s[i]==="["){
            stack.push(s[i]);
        }
        else if((char==="(" && s[i]===")") ||
        (char ==="{" && s[i]==="}") ||
        (char=== "[" && s[i]==="]")){
            stack.pop();
        }
        else return false;
    }
    return stack.length ? false : true

};

module.exports = isValid;

