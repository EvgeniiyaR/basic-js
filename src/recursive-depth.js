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
  calculateDepth(arr) {
    let count = 0;
    // throw new NotImplementedError('Not implemented');
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arr = arr.flat();
        count += this.calculateDepth(arr);
        return count + 1;
      }
    }

    return count + 1;
  }
}

// const a = new DepthCalculator();
// a.calculateDepth();

module.exports = {
  DepthCalculator
};
