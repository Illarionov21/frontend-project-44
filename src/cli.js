import readlineSync from 'readline-sync';

export function userName() {
    var name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}