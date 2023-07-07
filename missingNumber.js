function missingNumber(nums)
{
    // use a cyclic sort to sort the nums, from 0 to n
    // for 0 to nums.length:
        // while nums[i] != i and nums[i] < n: // to prevent numbers that are too big
            // swap nums[i] to nums[correctIndex] and nums[correctIndex] to nums[i]

    // for 0 to nums.length:
        // if i != nums[i]: return i+1
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            while (nums[i] !== i && nums[i] < n) {
                const correctIndex = nums[i];
                [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            }
        }
    
        for (let i = 0; i < n; i++) {
            if (nums[i] !== i) {
                return i;
            }
        }
    
        // If no missing number is found, return n
        return n;
}

console.log(missingNumber([0, 3, 1, 4, 5]));