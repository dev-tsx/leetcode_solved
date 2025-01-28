function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        let isExist = false;
        let j;
        for (j = 0; j < nums2.length; j++) {
            if (isExist && nums2[j] > nums1[i]) {
                result[i] = nums2[j];
                break;
            }

            if (nums2[j] == nums1[i]) isExist = true;
        }
        if (j == nums2.length) result[i] = -1;
    }

    return result;
};