module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];
  let bracketsArray = str.split('');

  for (let i = 0; i <= bracketsConfig.length - 1; i += 1) {
    openBrackets[i] = bracketsConfig[i][0];
    closeBrackets[i] = bracketsConfig[i][1];
  }

  for (let i = 0; i <= bracketsArray.length; i += 1) {
    for (let item in openBrackets) {
      if (bracketsArray[i] === openBrackets[item]) {
        if (bracketsArray[i + 1] === closeBrackets[item]) {
          bracketsArray.splice(i, 2);
          i -= 2;
          break;
        }
      }
    }
  }
  return bracketsArray.length === 0 ? true : false;
}