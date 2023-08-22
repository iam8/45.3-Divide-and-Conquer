
/**
 * Return the floor of the number x in the given array.
 *
 * The floor of x in an array is defined as the largest element in the array which is smaller than
 * or equal to x.
 *
 * Time complexity: O(log n)
 *
 * @param {Number[]} arr A sorted array of numbers (ascending order)
 * @param {Number} x A value to find the floor of in the array
 * @returns The floor of x, or -1 if a floor doesn't exist in the given array
 */
function findFloor(arr, x) {
    const len = arr.length;

    if (len === 0) return -1;

    let leftSearchIdx = 0;
    let rightSearchIdx = len - 1;

    while (leftSearchIdx <= rightSearchIdx) {
        let midIdx = Math.floor((leftSearchIdx + rightSearchIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal === x) {
            return midVal;
        }

        if (midVal > x) {

            // Search left half
            rightSearchIdx = midIdx - 1;
        }

        if (midVal < x) {
            let rightAdj = arr[midIdx + 1];
            if (rightAdj === undefined || rightAdj > x) {
                return midVal;
            } else {

                // Search right half
                leftSearchIdx = midIdx + 1;
            }
        }
    }

    return -1;
}


module.exports = findFloor;
