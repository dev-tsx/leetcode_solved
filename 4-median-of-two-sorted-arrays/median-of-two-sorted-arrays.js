var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length, n = nums2.length;
    let leftHalfSize = Math.floor((m + n + 1) / 2);
    let left = 0, right = m;

    while (left <= right) {
        let i = Math.floor((left + right) / 2);
        let j = leftHalfSize - i;

        let nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
        let nums1RightMin = i === m ? Infinity : nums1[i];
        let nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
        let nums2RightMin = j === n ? Infinity : nums2[j];

        if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
            if ((m + n) % 2 === 1) {
                return Math.max(nums1LeftMax, nums2LeftMax);
            }
            return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
        } else if (nums1LeftMax > nums2RightMin) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};