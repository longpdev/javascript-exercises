const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  result = 0;
  if (array.length == 0)
  return 0;
	for (const value of array){
    result += value;
  }
  return result;
};

const multiply = function(array) {
  result = 1;
	for (const value of array){
    result *= value;
    if (value == 0)
    return 0;
  }
  return result;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  if (n == 0 || n == 1)
   return 1;
  result = 1;
	for ( i=1; i<=n; i++)
   result *= i;
  return result;
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
