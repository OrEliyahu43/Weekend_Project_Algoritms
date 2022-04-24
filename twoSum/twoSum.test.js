const { test, expect } = require("@jest/globals");
const twoSum = require("./twoSum.easy");

test("Example 1", () => {
	expect(twoSum([2,7,11,15],9)).toStrictEqual([0,1]);
});

test("Example 2", () => {
	expect(twoSum([3,2,4],6)).toStrictEqual([1,2]);
});
