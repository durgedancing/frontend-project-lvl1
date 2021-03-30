import readlineSync from 'readline-sync';
import { gameOver, congratulation, getRandomInt } from '../src/index.js';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return 'no';
  } if (num === 2) {
    return 'yes';
  }

  for (let i = 2; i <= num / 2;) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }

  return 'yes';
};

export const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const num = getRandomInt(100);
    const rightAnswer = isPrime(num);
    const question = `${num}`;
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

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
