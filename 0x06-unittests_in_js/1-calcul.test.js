const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('tests addition of two positive numbers', function () {
    assert.equal(calculateNumber('SUM', 3, 5), 8);
    assert.equal(calculateNumber('SUM', 4.7, 10.1), 15);
  });

  it('tests addition of two negatvie numbers', function () {
    assert.strictEqual(calculateNumber('SUM', -2, -1), -3);
    assert.equal(calculateNumber('SUM', -3.4, -5.5), -8);
  });

  it('tests subtraction of two positive numbers', function () {
    assert.equal(calculateNumber('SUBTRACT', -3, -5), 2);
    assert.equal(calculateNumber('SUBTRACT', -4.5, -5.5), 1);
  });

  it('tests subtraction of two negative numbers', function () {
    assert.equal(calculateNumber('SUBTRACT', -2, -3), 1);
    assert.equal(calculateNumber('SUBTRACT', -3.1, -3.5), 0);
  });
  it('tests division of two positive numbers', function () {
    assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
    assert.equal(calculateNumber('DIVIDE', 6, 3.4), 2);
    assert.equal(calculateNumber('DIVIDE', 6.3, 3.4), 2);
    assert.equal(calculateNumber('DIVIDE', 6.3, 3), 2);
  });
});
