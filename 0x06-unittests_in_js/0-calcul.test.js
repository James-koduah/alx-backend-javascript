const assert = require('assert');
const calculateNumber = require('./0-calcul.js')

describe('calculateNumber', function() {
  it('Test calculateNumber rounds down number', ()=>{
    let result = calculateNumber(2.2, 1.1)
    assert.equal(result, 3)
  })
})
