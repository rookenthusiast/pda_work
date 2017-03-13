var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add a 1 + 4 and get 5', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal)
  })

  it('should be able to 7-4 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  })

  it('should be able to 3x5 and get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal)
  })

  it('should be able to divide two numbers', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  })

  it('should be able to input several numbers', function(){
    calculator.numberClick(4);
    calculator.numberClick(4);
    assert.equal(44, calculator.runningTotal)
  })

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.multiply(2)
    calculator.operatorClick('=');
    assert.equal(12, calculator.runningTotal)
  })

  it('should be able to clear total without affecting calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(6, calculator.runningTotal);
  })

});
