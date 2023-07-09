function twoSum(numbers, target)
{
    // left = 0, right = numbers.length - 1
    // while left < right:
        // sum = [left] + [right]
        // if sum > target: right--, we need smaller number
        // elif sum < target: left--, meaning we need bigger numbers
        // else: we found the pair so return

        var left = 0;
        var right = numbers.length - 1;
        
        while (left < right)
        {
            let sum = numbers[left] + numbers[right]
            if (sum > target) right--;
            else if (sum < target) left++;
            else return [left+1, right+1]
        }
}

module.exports = twoSum