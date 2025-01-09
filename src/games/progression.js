import runGameEngine from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * step);
    }
    return progression;
  };

const generateRound = () => {
    const start = Math.floor(Math.random() * 10) + 1; 
    const step = Math.floor(Math.random() * 10) + 1;  
    const length = Math.floor(Math.random() * 6) + 5; 
  
    const progression = generateProgression(start, step, length);
    const hiddenIndex = Math.floor(Math.random() * length);

    const correctAnswer = progression[hiddenIndex].toString(); // Преобразуем скрытое число в строку
    progression[hiddenIndex] = '...'; // Заменяем скрытое число на '...'
  
    const question = progression.join(' '); // Генерируем вопрос
    return [question, correctAnswer];
};

const startProgressionGame = () => runGameEngine(description, generateRound);

export default startProgressionGame;