#!/usr/bin/env node

import userName from '../src/cli.js';
import brainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');

const name = userName();
console.log(`Hello, ${name}!`);

brainEven(name);
