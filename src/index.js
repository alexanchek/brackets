module.exports = function check(str, bracketsConfig) {
  
  // взять каждый элемент из конфига и пройтись по строчке со счетом количества этих скобочек
  let startBracketAmount = 0;
  let endBracketAmount = 0;

  for (let i=0; i<bracketsConfig.length; i++) {
    for (let j=0; j<2; j++) {
      if (j===0) {
        startBracketAmount = str.split(bracketsConfig[i][j]).length-1
      }
      if (j===1) {
        endBracketAmount = str.split(bracketsConfig[i][j]).length-1
      }
    }
    if (startBracketAmount>0 && endBracketAmount>0) {
      if (startBracketAmount === endBracketAmount) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}
