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
  let obj = {};
  let newList = [];
  let list = str.split('');
  let value = list[0];
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      newList.push(obj);
    }
    if (value === list[i]) {
      console.log(newList);
      count += 1;
      obj[list[i]] = count;
    } if (value !== list[i]) {
      newList.push(obj);
      obj = {};
      count = 1;
      value = list[i];
      console.log(newList);
    }
  }
  let res = '';
  newList.forEach(element => {  
    for (key in element) {
      res += element[key] + key + '';
    }
  });
  return res;
};

module.exports = {
  encodeLine
};
