import readlineSync from 'readline-sync';
import {
  gameOver, congratulation, getRandomInt, getRandomIntInclusive,
} from '../src/index.js';

const generate = () => {
  const n = getRandomInt(10);
  const firstN = getRandomInt(50);
  let length = getRandomIntInclusive(5, 10);
  const array = [firstN];

  while (length !== 0) {
    const newN = array[array.length - 1] + n;
    array.push(newN);
    length -= 1;
  }

  return array;
};

const arrayToString = (array) => {
  let newString = array.toString();
  while (newString.includes(',')) {
    newString = newString.replace(',', ' ');
  }

  return newString;
};

export default () => {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3;) {
    const array = generate();

    const hiding = getRandomInt(array.length);
    const rightAnswer = array[hiding];
    array[hiding] = '..';
    const question = `${arrayToString(array)}`;
    const answer = Number(readlineSync.question(`Question: ${question}\nYour answer: `));

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
