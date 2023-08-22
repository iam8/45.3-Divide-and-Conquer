
/**
 * Find the number of times a given array of sorted, distinct numbers has been rotated
 * (counter-clockwise).
 *
 * @param {*} arr An array of sorted (ascending order), distinct numbers, rotated counter-clock-
 * wise a number of times
 * @returns The number of times the given array has been rotated
 */
function findRotationCount(arr) {
    const len = arr.length;

    if (len === 0 || len === 1) return 0;

    let rotations = 0;

    return rotations;
}


module.exports = findRotationCount;
