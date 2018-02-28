module.exports = function getZerosCount(number) {
  var amountOf5 = 0;
  var stepen5 = 5;
  while(stepen5 <= number)
  {
    stepen5 = stepen5 * 5;
    amountOf5 ++;
  }
  var zeroAmount = 0;
  for(var i = 1; i <= amountOf5; i++)
  {
    var thisStepen = Math.pow(5, i);
    var thisAmount = Math.floor(number/thisStepen);
    zeroAmount = zeroAmount + thisAmount;
  }
  return zeroAmount;
  // your implementation
}
