const mean = (arr) => {
  const arrSum = arr.reduce((acc, score) => acc + score);
  const result = arrSum / arr.length;
  return result;
};

module.exports = mean;
