const largestOddNumber = num =>
    [...num].reduceRight((odd, dig) => (odd || (+dig & 1) ? dig + odd : odd), '');