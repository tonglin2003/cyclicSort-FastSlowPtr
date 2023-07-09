function missingNumber(nums)
{
    // use a cyclic sort to sort the nums, from 0 to n
    // while i < nums.length:
        // if nums[i] != i and nums[i] < n: // to prevent numbers that are too big
            // swap nums[i] to nums[correctIndex] and nums[correctIndex] to nums[i]
        // else: i++
    // use while loop and increment to control the loop because we want to
    // avoid edge cases like duplicate num in the future

    // for 0 to nums.length:
        // if i != nums[i]: return i+1, to find the number that doesn't match their index
    // if not found: return const n = nums.length;


    let i = 0;
    while (i < nums.length)
    {
        let correctIndex = nums[i]
        if (nums[correctIndex] != nums[i])
        {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
        }
        else
        { i++; }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    // If no missing number is found, return n
    return nums.length;
}

// console.log(missingNumber([0, 3, 1, 4, 5]));
module.exports = missingNumber;