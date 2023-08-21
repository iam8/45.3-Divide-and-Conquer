
/**
 * Return the number of zeroes in the given array.
 *
 * CONSTRAINT: given array must contain only 1s and 0s, with all 1s followed by all 0s.
 *
 * Time complexity: O(log n)
 */
function countZeroes(arr) {
    const len = arr.length;

    if (len === 0) return 0;

    let leftIdx = 0;
    let rightIdx = len - 1;

    // Determine the index of the first 0
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        // Check middle value and values on either side
        let leftAdj = arr[midIdx - 1];
        let rightAdj = arr[midIdx + 1];

        if (midVal === 1) {
            if (rightAdj === undefined) return 0;
            if (rightAdj === 0) return len - (midIdx + 1);

            leftIdx = midIdx + 1;
        }

        if (midVal === 0) {
            if (leftAdj === undefined) return len;
            if (leftAdj === 1) return len - midIdx;

            rightIdx = midIdx - 1;
        }
    }

    // 'Catch-all' in case given array may not have been properly sorted, though note that a
    // positive result may still be returned even if array is not properly sorted
    return -1;
}


module.exports = countZeroes;
