// * 1 ----
const setOne = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);

console.log(setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2])); // * Output: [4, 5, 2, 3, 1]

// * 2 ----
const getRidOf = (tab, ...val) => tab.filter((el) => !val.includes(el));

console.log(getRidOf(["a", "b", "c", "d", "e", "f", "g"], "b", "e", "x"));
// * Output: ['a', 'c', 'd', 'f', 'g']
