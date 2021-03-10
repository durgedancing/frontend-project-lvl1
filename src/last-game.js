import readlineSync from 'readline-sync';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export default () => {
    const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');
    console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

    for (let i = 1; i < 4;) {

        let number = getRandomInt(100);
        let answer = readlineSync.question(`Question: ${number}\nYour answer: `);

        if (number % 2 === 0 && answer === 'yes' && i !== 3) { //тут бы еще расписать варианты с регистром
            console.log('Correct!');
            i += 1;
        } else if (number % 2 !== 0 && answer === 'no' && i !== 3) {
            console.log('Correct!');
            i += 1;
        } else if (number % 2 !== 0 && answer !== 'no') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
            i += 4;
        } else if (number % 2 === 0 && answer !== 'yes') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
            i += 4;
        } else if (i === 3) {
        console.log(`Congratulations, ${name}!`);
        i += 1;
        }
        }
    }


