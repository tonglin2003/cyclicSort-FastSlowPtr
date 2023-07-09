function maxArea(height) {
    // declare left and right ptr, left = 0, right = lenghth-1
    // maxArea for return and compare, so set it to 0
    // while left < right: 
        // if left.val < right.val: currentArea = left.val * (right-left), left++ to eliminate the smaller value
        // else currentArea = right.val * (right-left), right-- to eliminate the smaller value
        // compare currentArea and maxArea, take the greater one
    

    var maxArea = 0;
    var left = 0;
    var right = height.length - 1;

    while (left < right)
    {
        if (height[left] < height[right])
        {
            var currArea = height[left] * (right - left);
            left++;
        }
        else
        {
            var currArea = height[right] * (right-left);
            right--;
        }

        maxArea = Math.max(maxArea, currArea);
        
    }

    return maxArea;
    
};

module.exports = maxArea;