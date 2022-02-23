module.exports = function check(str, bracketsConfig) {

  const bracketsOpen = [];
  const bracketsPair = {};
  let twinsCount = 0;

  bracketsConfig.forEach(item => {
    bracketsPair[item[1]] = item[0];
    bracketsOpen.push(item[0]);
  });

  let bracketsArray = [];

  function isTwinspair(bracket) {
    return bracketsPair[bracket] === bracket;
  }

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    let lastBracket = bracketsArray[bracketsArray.length - 1];

    if (bracketsOpen.includes(currentBracket)) {
      if (isTwinspair(currentBracket) && twinsCount === 0) {
        twinsCount++;
        bracketsArray.push(currentBracket);
      } else if (isTwinspair(currentBracket) && twinsCount != 0 && currentBracket === lastBracket) {
        twinsCount--;
        bracketsArray.pop();
      } else if (isTwinspair(currentBracket) && twinsCount != 0 && currentBracket != lastBracket) {
        twinsCount++;
        bracketsArray.push(currentBracket);
      } else {
        bracketsArray.push(currentBracket);
      }
    } else {
      if (bracketsArray.length === 0) {
        return false;
      }

      if (bracketsPair[currentBracket] === lastBracket) {
        bracketsArray.pop();
      } else {
        return false;
      }
    }
  }
  return bracketsArray.length === 0;
}
