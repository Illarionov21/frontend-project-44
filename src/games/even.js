import runGameEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => runGameEngine(description, generateRound);

export default startEvenGame;
