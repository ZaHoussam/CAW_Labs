const first = require("./firstFunc");
const last = require("./lastFunc");
const chunk = require("./chunkFunc");

test("Run first Function", () => {
  expect(first(["first", "last", "20"], 2)).toStrictEqual(["first", "last"]);
});

test("Run first Function", () => {
  expect(first(["first", "last", "20"])).toStrictEqual("first");
});

test("Run first Function", () => {
  expect(first()).toStrictEqual([]);
});

test("Run last Function", () => {
  expect(last()).toStrictEqual([]);
});

test("Run last Function", () => {
  expect(last([], 1)).toStrictEqual([]);
});

test("Run last Function", () => {
  expect(last(["first", "last", "20"])).toStrictEqual("20");
});

test("Run last Function", () => {
  expect(last([1, 2, 3, 4, 5], 3)).toStrictEqual([3, 4, 5]);
});

describe("Array methods toString() and join()", () => {
  const myColor = ["Red", "Green", "White", "Black"];

  test("myColor.toString() should return a comma-separated string", () => {
    expect(myColor.toString()).toBe("Red,Green,White,Black");
  });

  test("myColor.join() with no argument should return a comma-separated string", () => {
    expect(myColor.join()).toBe("Red,Green,White,Black");
  });

  test("myColor.join('') should return a concatenated string with no separators", () => {
    expect(myColor.join("")).toBe("RedGreenWhiteBlack");
  });
});

describe("chunk function", () => {
  test("splits an array into chunks of specified size", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    expect(chunk([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
  });

  test("returns an empty array when given an empty array", () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test("returns the whole array as a single chunk if size is greater than array length", () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });
});
