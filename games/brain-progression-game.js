import readlineSync from 'readline-sync';
import { gameOver, congratulation, getRandomInt, getRandomIntInclusive } from '../src/index.js';

const generate = () => {

    let n = getRandomInt(10);
    let firstN = getRandomInt(50);
    let length = getRandomIntInclusive(5, 10);
    const array = [firstN];

    while (length !== 0) {
        let newN = array[array.length - 1] + n;
        array.push(newN);
        length = length - 1;
    }

    return array;
}

export const progression = () => {
    console.log('What number is missing in the progression?');
    
    for (let i = 0; i < 3;) {

        let array = generate();

        let hiding = getRandomInt(array.length);
        let rightAnswer = array[hiding];
        array[hiding] = '..';
        let question = `${array}`;
        let answer = Number(readlineSync.question(`Question: ${question}\nYour answer: `));

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
    
}