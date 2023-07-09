const missingNumber = require("./missingNumber");

describe("missingNumber should return the missing number", () => {
    test("[9,6,4,2,3,5,7,0,1] => 8", () => {
        expect(missingNumber([9,6,4,2,3,5,7,0,1])).toEqual(8);
    })
    test("[0,1] => 2", () => {
        expect(missingNumber([0,1])).toEqual(2);
    })
    test("[3,0,1] => 2", () => {
        expect(missingNumber([3,0,1])).toEqual(2);
    })

})