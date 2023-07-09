var findErrorNums = function(nums) {
    // cyclic sort that can handle duplicate
    // ex: [3,1,3,5,4] -> [ 1, 3, 3, 4, 5 ]
    let i = 0;
    while (i < nums.length)
    {
        let correctIndex = nums[i]-1;
        if (nums[correctIndex] !== nums[i])
        {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
        else
        {
            i++;
        }
    }

    console.log(nums)

    // find the number that doesn't match their index and return
    // list[0] is the number with error, list[1] is the number missing
    for (let i = 0; i < nums.length; i++)
    {
        if (i+1 !== nums[i])
        {
            return [nums[i], i+1];
        }
    }
    return -1;

};
module.exports = findErrorNums;


