const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 0;
  }

  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      this.count += 1;
    }
    console.log(arr);
    // throw new NotImplementedError('Not implemented');
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        console.log(arr[i]);
        console.log(this.count);
        calculateDepth(arr[i]);
      } else {
        continue;
      }
    }

    return this.count;
  }
}

module.exports = {
  DepthCalculator
};
