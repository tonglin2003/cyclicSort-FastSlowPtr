const findErrorNums = require('./setMismatch');

describe("findErrorNums should return the number with error and missing number in a list", () => {
    test("[3,1,3,5,4] => [3,2]", () => {
        expect(findErrorNums([3,1,3,5,4])).toEqual([3,2]);
    })
    test("[1,2,2,4] => [2,3]", () => {
        expect(findErrorNums([1,2,2,4])).toEqual([2,3]);
    })
    test("[1,1] => [1,2]", () => {
        expect(findErrorNums([1,1])).toEqual([1,2]);
    })

})