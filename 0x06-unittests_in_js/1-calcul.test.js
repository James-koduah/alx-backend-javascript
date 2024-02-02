const assert = require('assert');
const calculateNumber = require('./1-calcul.js')

describe('calculateNumber', function() {
  describe('testing Sum', ()=>{
    it('checks if it sums correctly', ()=>{
      let result = calculateNumber('SUM', 1.4, 4.5)
      assert.equal(result, 6)
    })
  })
  describe('testing Subtract', ()=>{
    it('checks if it subtracts correctly', ()=>{
      let result = calculateNumber('SUBTRACT', 1.4, 4.5)
      assert.equal(result, -4)
    })
  })
  describe('testing Divide', ()=>{
    it('checks if it divides correctly', ()=>{
      let result = calculateNumber('DIVIDE', 1.4, 4.5)
      assert.equal(result, 0.2)
    })
  })
  describe('testing Divide by Zero', ()=>{
    it('checks if it returns error', ()=>{
      let result = calculateNumber('DIVIDE', 1.4, 0)
      assert.equal(result, 'Error')
    })
  })
})
