
/**
 * Find the number of times a given array of sorted, distinct numbers has been rotated
 * (counter-clockwise).
 *
 * Time complexity: O(log n)
 *
 * @param {*} arr An array of sorted (ascending order), distinct numbers, rotated counter-clock-
 * wise a number of times
 * @returns The number of times the given array has been rotated
 */
function findRotationCount(arr) {
    const len = arr.length;

    if (len === 0 || len === 1) return 0;

    let leftSearchIdx = 0;
    let rightSearchIdx = len - 1;

    while (leftSearchIdx <= rightSearchIdx) {
        let midIdx = Math.floor((leftSearchIdx + rightSearchIdx) / 2);

        // Get left, right, and mid values
        let leftVal = arr[leftSearchIdx];
        let rightVal = arr[rightSearchIdx];
        let midVal = arr[midIdx];

        if (leftVal > midVal) {
            let leftAdj = arr[midIdx - 1];
            if (leftAdj > midVal) {
                return midIdx;
            } else {

                // Search left half
                rightSearchIdx = midIdx - 1;
            }
        } else if (rightVal < midVal) {
            let rightAdj = arr[midIdx + 1];
            if (rightAdj < midVal) {
                return midIdx + 1;
            } else {

                // Search right half
                leftSearchIdx = midIdx + 1;
            }
        } else {
            return 0;
        }
    }

    return 0;
}


module.exports = findRotationCount;
