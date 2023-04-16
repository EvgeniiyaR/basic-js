const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) === 'number' ||  position > 1 ||  position < this.getLength() || Number.isInteger(position)) {
      delete this.arr[position];
      return this;
    }
    this.arr = [];
    throw new NotImplementedError("You can't remove incorrect link!");
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    try {
      return this.arr.join('~~');
    }
    finally {
      this.arr = [];
    }
  }
};

// console.log(chainMaker.addLink(1).finishChain());

module.exports = {
  chainMaker
};
