const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", function() {
  it('tests summing Utils.calculateNumber', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    const consoleLogStub = sinon.stub(console, 'log');

    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    //expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogStub.calledOnceWithExactly('The total is 120')).to.be.true;

    calculateNumberStub.restore();
    consoleLogStub.restore();
  });

});
