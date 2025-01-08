import runGameEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const generateRound = () => {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;

    const question = `${num1} ${num2}`;
    const correctAnswer = calculateGCD(num1, num2).toString();

    return [question, correctAnswer];
}

const startGcdGame = () => runGameEngine(description, generateRound);

export default startGcdGame;