import readlineSync from 'readline-sync';

export default () => {
    const answer = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');
    console.log(`Hello, ${answer}!`);
}
