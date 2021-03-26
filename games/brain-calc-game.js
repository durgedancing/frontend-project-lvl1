import readlineSync from 'readline-sync';
import { gameOver, congratulation, getRandomInt} from '../src/index.js';

const simpleCalc = (n1, n2, n) => {   
    switch(n) {
        case '+': 
        return n1 + n2;
        case '-': 
        return n1 - n2;
        default:
        return n1 * n2;
    }
};

const array = ['+', '-', '*'];

export const getSign = () => {
    let n = getRandomInt(2);
    return array[n];
};

export const calc = () => {

    console.log('What is the result of the expression?');

    for (let i = 0; i < 3;) {

    let n = getSign();
    let number1 = getRandomInt(100);
    let number2 = getRandomInt(100);

    let question = `${number1} ${n} ${number2}`;
    let rightAnswer = simpleCalc(number1, number2, n);

    let answer = Number(readlineSync.question(`Question: ${question}\nYour answer: `));

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