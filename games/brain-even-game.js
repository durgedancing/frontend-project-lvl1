import readlineSync from 'readline-sync';
import { congratulation, gameOver, getRandomInt } from '../src';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const number = getRandomInt(100);
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    let rightAnswer;

    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    if (answer === rightAnswer && i !== 2) {
      console.log('Correct!');
      i += 1;
    } else if (answer !== rightAnswer) {
      gameOver(answer, rightAnswer);
      i += 3;
    } else if (i === 2) {
      congratulation();
      i += 1;
    }
  }
};
