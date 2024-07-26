const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", function() {
  let consoleLogSpy;

  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('tests that console.log is called once with the expected output', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is 120')).to.be.true;
  });

  it('tests that console.log is being called once and displays expected output', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is 20')).to.be.true;
  });

});
