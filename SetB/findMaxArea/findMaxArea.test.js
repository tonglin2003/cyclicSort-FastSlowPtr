const maxArea = require('./findMaxArea');

describe("maxArea should calculate the maximum area between vertical lines", () => {
    test("[1,8,6,2,5,4,8,3,7] => 49", () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    });

    test("[1,1] => 1", () => {
        expect(maxArea([1, 1])).toEqual(1);
    });

    test("[4,3,2,1,4] => 16", () => {
        expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
    });
});