const twoSum = require('./twoSum2');

describe("twoSum should find the indices of two numbers that sum up to the target", () => {
    test("[2, 7, 11, 15], target=9 => [1, 2]", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

    test("[2, 3, 4], target=6 => [1, 3]", () => {
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    });

    test("[-1, 0], target=-1 => [1, 2]", () => {
        expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    });
});