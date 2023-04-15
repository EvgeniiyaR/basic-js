const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  let obj = {};
  let newList = [];
  let list = str.split('');
  let value = list[0];
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (value === list[i]) {
      count += 1;
      obj[list[i]] = count;
    } else {
      newList.push(obj);
      obj = {};
      count = 1;
      value = list[i];
    }
  }
  newList.forEach(element => {
    let res = '';
    for (key in element) {
      res += element[key] + key + '';
    }
  });
  return res;
}

module.exports = {
  encodeLine
};
