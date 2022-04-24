const { test, expect } = require("@jest/globals");
const strStr = require("./strStr.easy");

test("Example 1", () => {
	expect(strStr("aaaaa","baa")).toBe(-1);
});

test("Example 2", () => {
	expect(strStr('hello','ll')).toBe(2);
});
