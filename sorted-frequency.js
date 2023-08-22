
/**
 * Find the index of the first occurrence of a value in an array.
 *
 * @param {Array} arr Array of sorted numbers (ascending order)
 * @param {Number} target Value to search for in array
 * @param {Number} leftSearchIdx Index of leftmost value of subarray to search in
 * @param {Number} rightSearchIdx Index of rightmost value of subarray to search in
 * @returns Index of first occurrence of target value, or -1 if not found
 */
function getFirstOccIndex(arr, target, leftSearchIdx, rightSearchIdx) {
    while (leftSearchIdx <= rightSearchIdx) {
        let midIdx = Math.floor((leftSearchIdx + rightSearchIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal === target) {
            let leftAdj = arr[midIdx - 1];

            if (leftAdj === undefined || leftAdj < target) {
                return midIdx;
            }

            rightSearchIdx = midIdx - 1;
        }

        if (midVal < target) {
            leftSearchIdx = midIdx + 1;
        }

        if (midVal > target) {
            rightSearchIdx = midIdx - 1;
        }
    }

    return -1;
}


/**
 * Find the index of the last occurrence of a value in an array.
 *
 * @param {Array} arr Array of sorted numbers (ascending order)
 * @param {Number} target Value to search for in array
 * @param {Number} leftSearchIdx Index of leftmost value of subarray to search in
 * @param {Number} rightSearchIdx Index of rightmost value of subarray to search in
 * @returns Index of last occurrence of target value, or -1 if not found
 */
function getLastOccIndex(arr, target, leftSearchIdx, rightSearchIdx) {
    while (leftSearchIdx <= rightSearchIdx) {
        let midIdx = Math.floor((leftSearchIdx + rightSearchIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal === target) {
            let rightAdj = arr[midIdx + 1];

            if (rightAdj === undefined || rightAdj > target) {
                return midIdx;
            }

            leftSearchIdx = midIdx + 1;
        }

        if (midVal < target) {
            leftSearchIdx = midIdx + 1;
        }

        if (midVal > target) {
            rightSearchIdx = midIdx - 1;
        }
    }

    return -1;
}


/**
 * Return the count of the occurrences of a given number in a given array.
 *
 * Return -1 if the given number doesn't exist in the array.
 *
 * CONSTRAINT: Given array must be sorted (ascending order).
 *
 * Time complexity: O(log n)
 */
function sortedFrequency(arr, target) {
    const len = arr.length;

    if (len === 0) return -1;

    const firstTargIdx = getFirstOccIndex(arr, target, 0, len - 1);
    const lastTargIdx = getLastOccIndex(arr, target, firstTargIdx, len - 1);

    console.log("First occ:", firstTargIdx);
    console.log("Last occ:", lastTargIdx);

    if (firstTargIdx === -1 || lastTargIdx === -1) {
        return -1;
    }

    return lastTargIdx - firstTargIdx + 1;
}


module.exports = sortedFrequency;
