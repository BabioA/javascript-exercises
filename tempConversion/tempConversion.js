const ftoc = function(fahrenheit) {
  let number = ((fahrenheit - 32) * (5/9));
  let result = Math.round(number * 10) / 10;
  return result;
}

const ctof = function(celsius) {
  let number = ((celsius * 9/5) + 32);
  let result = Math.round(number * 10) / 10;
  return result;
}

module.exports = {
  ftoc,
  ctof
}
