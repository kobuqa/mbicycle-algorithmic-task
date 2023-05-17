# Welcome, candidate! 👋

## In that repository you can find our screening pre-interview task

> Yes, I know, it's boring to solve tasks like that. But it's not my personal wish or will. Customers provide their own tasks in hackerrank and most of interviews are failed cuz of that. Hope you will understand.

## Task: Sum in Range

Given an array `arr` of integers, and two `l` and `r`, find the number of pairs (i, j)(1 <= i < j <= n) such that value `arr[i][] + arr[j][]` lies between `l` and `r`, both inclusive. Array indices starts at 1.

### Example

Suppose `n = 4, arr = [2, 3, 4, 5], l = 5, r = 7`

There are 4 pairs with a sum between 5 and 7:

- arr[1] + arr[2] = 2 + 3 = 5
- arr[1] + arr[3] = 2 + 4 = 6
- arr[1] + arr[4] = 2 + 5 = 7
- arr[2] + arr[3] = 3 + 4 = 7

Return 4.

### Function description

Complete the function getNumPairs.

The function getNumPairs has the following signature:

- `int arr(n): an array of integers`
- `int l: minimum acceptable sum`
- `int r: maximum acceptable sum`

### Return

int: the number of pairs that satisfy the condition.

### Constraints

- 1 <= n <= 10^5
- 1 <= arr[i] <= 10^9
- 0 <= l <= r <= 10^9

> Feel free to open index.js and write your own solution.

> After finishing the solution feel free to create new pull request to current repo.

> Wish you good luck! 🍀

## Test your solution

1. `npm i`

2. `npm test`
