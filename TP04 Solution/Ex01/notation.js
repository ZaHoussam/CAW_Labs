const mean = (arr) => {
  const arrSum = arr.reduce((acc, score) => acc + score);
  return arrSum / arr.length;
};

module.exports = { mean };
