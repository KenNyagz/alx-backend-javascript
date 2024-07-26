/* eslint-env mocha */

const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('tests addition of two positive numbers', function () {
    expect(calculateNumber('SUM', 3, 5)).to.equal(8);
    expect(calculateNumber('SUM', 4.7, 10.1)).to.equal(15);
  });

  it('tests addition of two negatvie numbers', function () {
    expect(calculateNumber('SUM', -2, -1)).to.equal(-3);
    expect(calculateNumber('SUM', -3.4, -5.5)).to.equal(-8);
  });

  it('tests subtraction of two positive numbers', function () {
    expect(calculateNumber('SUBTRACT', -3, -5)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -4.5, -5.5)).to.equal(1);
  });

  it('tests subtraction of two negative numbers', function () {
    expect(calculateNumber('SUBTRACT', -2, -3)).to.equal(1);
    expect(calculateNumber('SUBTRACT', -3.1, -3.5)).to.equal(0);
  });
  it('tests division of two positive numbers', function () {
    expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    expect(calculateNumber('DIVIDE', 6, 3.4)).to.equal(2);
    expect(calculateNumber('DIVIDE', 6.3, 3.4)).to.equal(2);
    expect(calculateNumber('DIVIDE', 6.3, 3)).to.equal(2);
  });

  it('tests division by zero', function () {
    expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -5, 0)).to.equal('Error');
  });

  it('tests dividing zero, should return 0', function () {
    expect(calculateNumber('DIVIDE', 0, -5)).to.equal(0);
    expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
  });

  it('tests invalid opertion type', function () {
    expect(() => calculateNumber('MULT', 5, 6)).to.throw('Invalid operation');
  });
});
