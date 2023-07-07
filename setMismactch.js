var findErrorNums = function(nums) {
    // cyclic sort
    for (let i = 0; i < nums.length; i++)
    {
        let value = nums[i];
        let correctIndex = value - 1;

        if (i !== correctIndex)
        {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }
    console.log(nums)
    // find duplicate by if num doesn't match the index-1
    // return index-1, index
    for (let i = 0; i < nums.length; i++)
    {
        if (i+1 !== nums[i])
        {
            return [nums[i], i+1];
        }
    }
    return -1;
};

console.log(findErrorNums([3,1,2,5,3,6]))
console.log(findErrorNums([2,1,2,5,4,6]))
console.log(findErrorNums([3,1,2,4,4,6]))
console.log(findErrorNums([3,1,2,4,4,6]))
console.log(findErrorNums([2,2]))


