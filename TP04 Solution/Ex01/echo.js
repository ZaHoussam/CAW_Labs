// * Ex == 1

const exf = (s, n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(s);
  }

  return arr;
};

console.log(exf("echo", 5));

export default exf;
