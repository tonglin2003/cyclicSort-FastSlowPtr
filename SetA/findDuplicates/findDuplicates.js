function findDuplicates(nums)
{
    // while loop cyclic sort, and use if and while to handle duplicate
    let i = 0;
    let duplicate = [];
    while( i < nums.length)
    {
        let val = nums[i];
        let correct = val-1;
        if (nums[correct] !== val)
        {
            [nums[correct], nums[i]] = [nums[i], nums[correct]];
        }
        else
        {
            i++; // go on to next element only when currentIndex has the correct number
            // so it can prevent duplicate numbers
        }
    }
    for (var j = 1; j <= nums.length; j++)
    {
        if (nums[j-1] !== j)
        {
            duplicate.push(nums[j-1]);
        }
    }
    return duplicate;
}

module.exports = findDuplicates;