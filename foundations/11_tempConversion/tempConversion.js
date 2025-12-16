const convertToCelsius = function(num) {
  let temp = (num - 32) / 1.8;
  temp = Math.round(temp * 10);
  return temp / 10;
};

const convertToFahrenheit = function(num) {
  let temp = (num * 1.8) + 32;
  temp = Math.round(temp * 10);
  return temp / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
