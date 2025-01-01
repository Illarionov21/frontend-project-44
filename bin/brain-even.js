import readlineSync from 'readline-sync';

export default function brainEven(name) {
  let isWinner = true;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);

    const answer = readlineSync.question('Your answer: ');

    if ((randomNumber % 2 === 0 && answer !== 'yes') || (randomNumber % 2 !== 0 && answer !== 'no')) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomNumber % 2 === 0 ? 'yes' : 'no'}'.`);
      isWinner = false;
      break;
    }
    console.log('Correct!');
  }
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  }
}
