const removeDuplicate = require('./removeDuplicateFromSortedArray');

describe("removeDuplicate should remove duplicates from the array and return the count of unique elements", () => {
    test("[1, 1, 2] => 2", () => {
        const nums = [1, 1, 2];
        expect(removeDuplicate(nums)).toEqual(2);
        expect(nums.slice(0, 2)).toEqual([1, 2]);
    });

    test("[0, 0, 1, 1, 1, 2, 2, 3, 3, 4] => 5", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        expect(removeDuplicate(nums)).toEqual(5);
        expect(nums.slice(0, 5)).toEqual([0, 1, 2, 3, 4]);
    });

    test("[1, 2, 3, 4, 5] => 5", () => {
        const nums = [1, 2, 3, 4, 5];
        expect(removeDuplicate(nums)).toEqual(5);
        expect(nums.slice(0, 5)).toEqual([1, 2, 3, 4, 5]);
    });
});