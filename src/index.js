import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const greeting = () => {
  console.log(`Hello, ${name}!`);
};

export const congratulation = () => {
  console.log(`Congratulations, ${name}!`);
};

export const gameOver = (answer, rightAnswer) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
};

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getRandomIntInclusive = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
};
