/**
 * This is a function.
 *
 * @param {number[]} arr - An array of integers
 * @param {number} l - A minimum acceptable sum
 * @param {number} r - A maximum acceptable sum
 * @return {number} Returns the number of pairs
 *
 * @example
 *
 *     getNumPairs([2,3,4,5], 5, 7); // Return 4;
 */
function getNumPairs(arr, l, r) {
  function getLowerIndex(a , low , high , el) {
    while (low < high) {
      const middle = low + parseInt(`${(high - low) / 2}`);
      if (el > a[middle])
        low = middle + 1;
      else
        high = middle;
    }
    return low;
  }

  function getUpperIndex(a , low , high , el) {
    while (low < high) {
      const middle = low + parseInt(`${(high - low) / 2}`);
      if (el < a[middle])
        high = middle;
      else
        low = middle + 1;
    }
    return high;
  }

  // Sort the given array
  arr.sort((a,b) => a - b);
  // collect unique array elements
  const set = new Set(arr);
  const uniques = [...set];
  // collect duplicates only
  const duplicates = new Set(arr.filter(item => !set.delete(item)));

  const N = uniques.length;
  let right = N - 1, count = 0;

  // Iterate until right > 0
  while (right > 0) {
    const currElement = uniques[right];

    // Starting index of element
    // whose sum with currElement >= L
    let lowerIndex = getLowerIndex(arr, 0, N, l - currElement);
    lowerIndex++;
    const start = lowerIndex;

    // Ending index of element
    // whose sum with currElement <= R
    let upperIndex = getUpperIndex(arr, 0, N, r - currElement);
    let end = upperIndex;

    // Update the value of end
    end = Math.min(end, right);

    // Add the count of elements
    // to the variable count
    if (end - start >= 0) {
      count += (end - start + 1);
    }

    // for duplicates checking sum range
    if (duplicates.has(currElement)) {
      if (l <= currElement * 2 && currElement * 2 <= r) {
        count++;
      }
    }

    right--;
  }

  // Return the value of count
  return count;
}
module.exports = getNumPairs;
