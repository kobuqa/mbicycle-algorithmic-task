const getNumPairs = require("./index");

test("Arr: [2, 3, 4, 5]; L: 5; R: 7", () => {
  expect(getNumPairs([2, 3, 4, 5], 5, 7)).toBe(4);
});

test("Arr: [2, 100, 100]; L: 200; R: 200", () => {
  expect(getNumPairs([2, 100, 100], 200, 200)).toBe(1);
});

test("Arr: [3]; L: 1; R: 7", () => {
  expect(getNumPairs([3], 1, 7)).toBe(0);
});

test("Arr: [3, 6, 2, 3]; L: 7; R: 10", () => {
  expect(getNumPairs([3, 6, 2, 3], 7, 10)).toBe(2);
});

// Some hints, maybe will be helpful
// 3 + 6 = 9 +
// 3 + 2 = 5 - cuz lower
// 3 + 3 = 6 - cuz lower
// 6 + 3 = 9 - cuz duplicate
// 6 + 2 = 8 +
// 6 + 3 = 9 - cuz duplicate
// 2 + 3 = 5 - cuz lower
// 2 + 6 = 8 - cuz duplicate
// 2 + 3 = 5 - cuz lower

test("Arr: [3,4,3,4,2,1,2,1]; L: 4; R: 6", () => {
  expect(getNumPairs([3, 4, 3, 4, 2, 1, 2, 1], 2, 6)).toBe(8);
});

test("Arr: [5,1,2]; L: 4; R: 7", () => {
  expect(getNumPairs([5, 1, 2], 4, 7)).toBe(2);
});

test("Arr: [3,4,5]; L: 1; R: 2", () => {
  expect(getNumPairs([3, 4, 5], 1, 2)).toBe(0);
});
