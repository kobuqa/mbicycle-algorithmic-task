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
  const visited = {}
  const pairs = {}
  let res = 0
  for(let i = 0; i < arr.length; i++) {
    for(let j = l; j <= r; j++) {
      if (visited[j - arr[i]] && !pairs[`${j-arr[i]}${arr[i]}`] && !pairs[`${arr[i]}${j-arr[i]}`]) {
        res++
        pairs[`${j-arr[i]}${arr[i]}`] = 1
      }
    }
    visited[arr[i]] = 1
  }

  return res
}

module.exports = getNumPairs;
