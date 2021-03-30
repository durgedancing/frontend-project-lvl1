import readlineSync from 'readline-sync';
import { gameOver, congratulation, getRandomInt } from '../src/index.js';

const findMinValue = (n1, n2) => (n1 - n2 >= 0 ? n2 : n1);

const findMaxValue = (n1, n2) => (n1 - n2 >= 0 ? n1 : n2);

const getGcd = (n1, n2) => {
  const min = findMinValue(n1, n2);
  const max = findMaxValue(n1, n2);

  if (min === 0) {
    return max;
  } if (max === 0) {
    return Math.abs(min);
  }

  if (max % min === 0) {
    return min;
  }
  const newN1 = max % min;
  const newN2 = min % newN1;
  return getGcd(newN1, newN2);
};

export default () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3;) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);

    const question = `${number1} ${number2}`;
    const answer = Number(readlineSync.question(`Question: ${question}\nYour answer: `));

    const rightAnswer = getGcd(number1, number2);

    if (answer === rightAnswer && i !== 2) {
      console.log('Correct!');
      i += 1;
    } else if (answer !== rightAnswer) {
      gameOver(answer, rightAnswer);
      i += 3;
    } else if (answer === rightAnswer && i === 2) {
      congratulation();
      i += 1;
    }
  }
};
