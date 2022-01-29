
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length < 1) {
    return [];
  }

  let resultArray = [];

  for (let i = 0; i < matrix.length; i++) {
    console.log(i);
    if (i % 2 === 0) {
      resultArray = resultArray.concat(matrix[i].sort((a, b) => a - b));
    } else {
      resultArray = resultArray.concat(matrix[i].sort((a, b) => b - a));
    }
  };
  return resultArray;
};
