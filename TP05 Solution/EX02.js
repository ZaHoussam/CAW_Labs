// * Before Convert
var arr = [3, 5, 8];
var plus_one = arr.map(function (n) {
  return n + 1;
});
// * After Convert
var plus_one = arr.map((n) => n + 1);

// * Before Convert
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
// * After Convert
const double = (arr) => arr.map((val) => val * 2);

// * Before Convert
function add(a, b) {
  if (a === 0) a = 0;
  else {
    a = a || 10;
  }
  if (b === 0) b = 0;
  else {
    b = b || 10;
  }
  return a + b;
}
// * After Convert
const add = (a, b) => {
  a === 0 ? (a = 0) : (a = a || 10);
  b === 0 ? (b = 0) : (b = b || 10);
  return a + b;
};
