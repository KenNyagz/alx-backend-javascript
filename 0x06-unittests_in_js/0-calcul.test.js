const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 when inputs are 1 and 3', function () {
    assert.strictEqual(calculateNumber(10, 13), 23);
  });

  it('Should return 5 when passed 1.4 and 3.7', function () {
    assert.strictEqual(calculateNumber(2.4, 2.7), 5);
  });

  it('should return 6 when inputs are 1.5 and  3.5', function () {
    assert.strictEqual(calculateNumber(7.5, 4.5), 13);
  });

  it('should return 0 when passed 0 and 0 as argumnets', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -5 when passed -2.3 and -2.5', function () {
    assert.strictEqual(calculateNumber(-2.3, -2.5), -4);
  });
  it('should return 2 when passed -1 and 3', function () {
    assert.strictEqual(calculateNumber(-1, 3), 2);
  });
});
