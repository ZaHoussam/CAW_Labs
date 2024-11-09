const exf = require("./echo");
const mean = require("./notation");

test("Return Array With Messages", () => {
  expect(exf("echo", 5)).toStrictEqual([
    "echo",
    "echo",
    "echo",
    "echo",
    "echo",
  ]);
});

test("Return Sum Array / Array.length", () => {
  expect(mean([10, 20, 30])).toStrictEqual(20);
});
