const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      result.push(arr[i + 1]);
      console.log(result);
    } else if (arr[i] === '--double-prev') {
      result.push(result[i - 1]);
      console.log(result);
    } else if (arr[i] === '--discard-next') {
      result.push(undefined);
      console.log(result);
    } else if (arr[i - 1] === '--discard-next') {
      result.push(undefined);
      console.log(result);
    } else if (arr[i] === '--discard-prev') {
      result[i - 1] = undefined;
      result.push(undefined);
      console.log(result);
    } else {
      result.push(arr[i]);
      console.log(result);
    } 
  }
  return result.filter((el) => typeof(el) !== 'undefined');
}

module.exports = {
  transform
};
