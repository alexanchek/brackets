module.exports = function check(str, bracketsConfig) {

  open_brackets = [];
  close_brackets = [];
  stack = [];
  counterStick = 0;

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] != '|' && bracketsConfig[i][1] != '|') {
      open_brackets.push(bracketsConfig[i][0]);
      close_brackets.push(bracketsConfig[i][1]);
    }
  }

  usualBrackets = false;

  for (let i = 0; i < str.length; i++) {

    if (str[i] != '|') {
      if (open_brackets.indexOf(str[i]) != -1) {
        stack.push(str[i]);
      } else {
        index = close_brackets.indexOf(str[i]);
        if ((stack.length > 0) && (stack[stack.length - 1] === open_brackets[index])) {
          stack.pop()
        } else {
          return false;
        }

      }
    }
    
    else {
    	counterStick++;
    }
  }

  if (stack.length === 0 && counterStick%2 === 0) {
    return true;
  }
  else {
  return false;
  }
}
