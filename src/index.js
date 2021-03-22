import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const greeting = () => {
    console.log(`Hello, ${name}!`);
};

export const congratulation = () => {
    console.log(`Congatulations, ${name}!`);
};

export const gameOver = (answer, rightAnswer) => {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
};

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export const game = (answer, rightAnswer, i) => {
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