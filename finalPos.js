const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let finalPos = [0, 0];

  for (const move of moves) {
    (move === 'north') ? y++
      : (move === 'east') ? x++
      : (move === 'west') ? x--
      : (move === 'south') ? y--
      : console.log('Move is not in NEWS directions!');
  }

  finalPos[0] = x;
  finalPos[1] = y;
  return finalPos;
}

const paradeMoves = ['north', 'north', 'west', 'west', 'north', 'east','north']

console.log(finalPosition(paradeMoves));