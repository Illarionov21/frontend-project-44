import runGameEngine from '../index.js';

const description = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);

  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
  return [question, correctAnswer.toString()];
};

const startCalcGame = () => runGameEngine(description, generateRound);

export default startCalcGame;
