import readlineSync from 'readline-sync';
import { gameOver, congratulation, getRandomInt} from '../src/index.js';

const findMinValue = (n1, n2) => {
    return n1 - n2 >= 0 ? n2 : n1;
}

const findMaxValue = (n1, n2) => {
    return n1 - n2 >= 0 ? n1 : n2;
}

const getGcd = (n1, n2) => {
    let min = findMinValue(n1, n2);
    let max = findMaxValue(n1, n2);

    if (max % min === 0 ) {
        return min;
    } else {
       let newMin = min % (max % min);
       return getGcd(min, newMin);
    }
}

export const gcd = () => {

    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 2;) {
         let number1 = getRandomInt(100);
         let number2 = getRandomInt(100);

         let question = `${number1} ${number2}`;
         let answer = Number(readlineSync.question(`Question: ${question}\nYour answer: `));

         let rightAnswer = getGcd(number1, number2);

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
} 