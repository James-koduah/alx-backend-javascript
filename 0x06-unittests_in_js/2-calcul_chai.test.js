const chai = require('chai')
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai.js')

describe('calculateNumber', function() {
  describe('testing Sum', ()=>{
    it('checks if it sums correctly', ()=>{
      let result = calculateNumber('SUM', 1.4, 4.5)
      expect(result).to.equal(6)
    })
  })
  describe('testing Subtract', ()=>{
    it('checks if it subtracts correctly', ()=>{
      let result = calculateNumber('SUBTRACT', 1.4, 4.5)
      expect(result).to.equal(-4)
    })
  })
  describe('testing Divide', ()=>{
    it('checks if it divides correctly', ()=>{
      let result = calculateNumber('DIVIDE', 1.4, 4.5)
      expect(result).to.equal(0.2)
    })
  })
  describe('testing Divide by Zero', ()=>{
    it('checks if it returns error', ()=>{
      let result = calculateNumber('DIVIDE', 1.4, 0)
      expect(result).to.equal('Error')
    })
  })
})
