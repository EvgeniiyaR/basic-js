const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = '' + n;  // превращаем n в строку
  let result = [];
  let lenStr = [...nStr].length;  // получаем длину строки

  if (lenStr === 1) {  // это на случай если n 1 цифра
    return n;
  }

  for (let i = 0; i < lenStr; i++) {  // проходимся циклом по длине строки
    let tmpStr = nStr.slice(0, i) + nStr.slice(i + 1);  // делаем новые строки без 1 цифры
    let tmpNumber = Number(tmpStr); // превращаем строку в цифру
    result.push(tmpNumber);
  }
  return Math.max(...result);  // возвращаем максимальное число
}

module.exports = {
  deleteDigit
};
