const convertToCelsius = function(temp) {
  let newtemp = (temp-32)/1.8;
  return parseFloat(newtemp.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let newtemp = (temp*1.8)+32;
  return parseFloat(newtemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
