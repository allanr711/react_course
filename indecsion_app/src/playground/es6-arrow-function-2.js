const multipier = {
  numbers : [3, 6, 9],
  multiplyBy : 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multipier.multiply());