const findDuplicate = require("./findDuplicates");

describe("findDuplicate should return the duplicated item", () => {
    test("[4,3,2,7,8,2,3,1,0] => [3,2]", () => {
        expect(findDuplicate([4,3,2,7,8,2,3,1,0])).toEqual([3,2]);
    })
    test("[1] => []", () => {
        expect(findDuplicate([1])).toEqual([]);
    })
    test("[1,1,2] => [1]", () => {
        expect(findDuplicate([1,1,2])).toEqual([1]);
    })

})