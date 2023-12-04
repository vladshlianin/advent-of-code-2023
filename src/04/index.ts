import path from 'path';
import { calculatePoints, calculateScratchCards } from './calculateCards';

const INPUT_PATH = path.join(__dirname, 'input.txt');

const firstPartResult = calculatePoints(INPUT_PATH);
const secondPartResult = calculateScratchCards(INPUT_PATH);

console.log(`Result for part 1 is ${firstPartResult}`);
console.log(`Result for part 2 is ${secondPartResult}`);
