const chai = require("chai");
const expect = chai.expect;
const sinon = require('sinon')

const utils = require('./utils')
const sendPayment = require('./3-payment')

describe('sendPaymentRequestToApi', ()=>{
  it('check if the utils function is being called', ()=>{
    const utils_spy = sinon.spy(utils);
    sendPayment(100, 20)
    expect(utils_spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    utils_spy.calculateNumber.restore();
  })
})
