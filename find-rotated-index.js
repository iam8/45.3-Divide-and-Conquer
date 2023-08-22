
/**
 * Return the index of a target value in a rotated array.
 *
 * Time complexity: O(log n)
 *
 * @param {Number[]} arr A rotated array of sorted numbers (ascending order)
 * @param {Number} target Value to search for in array
 * @returns The index of the target value, or -1 if not found
 */
function findRotatedIndex(arr, target) {
    const len = arr.length;

    if (len === 0) return -1;

    // Get left, right, mid indices
    let leftSearchIdx = 0;
    let rightSearchIdx = len - 1;

    while (leftSearchIdx <= rightSearchIdx) {

        let midIdx = Math.floor((leftSearchIdx + rightSearchIdx) / 2);

        // Get left, right, mid values
        let leftVal = arr[leftSearchIdx];
        let rightVal = arr[rightSearchIdx];
        let midVal = arr[midIdx];

        // Check the 3 values against target
        if (midVal === target) return midIdx;
        if (leftVal === target) return leftSearchIdx;
        if (rightVal === target) return rightSearchIdx;

        if (target < midVal) {
            if (leftVal < midVal && target < leftVal) {

                // Search right half
                leftSearchIdx = midIdx + 1;
            } else {

                //Search left half
                rightSearchIdx = midIdx - 1;
            }
        }

        if (target > midVal) {
            if (rightVal > midVal && target > rightVal) {

                // Search left half
                rightSearchIdx = midIdx - 1;
            } else {

                // Search right half
                leftSearchIdx = midIdx + 1;
            }
        }
    }

    return -1;
}


module.exports = findRotatedIndex;
