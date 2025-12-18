const add = function(first, second) {
	return first + second;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, operand) => {
    return sum += operand;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, operand) => {
    return product * operand;
  }, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let product = 1;
	for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
