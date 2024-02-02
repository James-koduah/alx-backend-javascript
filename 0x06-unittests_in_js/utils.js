const Utils =  {
  calculateNumber(type, a, b){
    aa = Math.round(a)
    bb = Math.round(b)
    if (type === 'SUM'){
      return aa + bb
    }
    if (type === 'SUBTRACT'){
      return aa - bb
    }
    if (type === 'DIVIDE'){
      if (bb === 0) return 'Error'
      return aa / bb
    }
  }
}

module.exports = Utils;
