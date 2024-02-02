const chai = require("chai");
const expect = chai.expect;
const sinon = require('sinon')

const utils = require('./utils')
const sendPayment = require('./4-payment')

describe('sendPaymentRequestToApi', ()=>{
  it('check if the utils function', ()=>{
    const console_spy = sinon.spy(console);
    const calculateNumber = sinon.stub(utils, 'calculateNumber');
    calculateNumber.returns(20);
    sendPayment(100, 20)
    expect(calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyConsole.log.calledWith('The total is: 10')).to.be.true;
    calculateNumber.restore()
    console_spy.restore()
  })
})
