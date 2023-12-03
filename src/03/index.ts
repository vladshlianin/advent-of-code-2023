import path from 'path';
import { calculateEngineSchematic } from './calculateEngineSchematic';

const INPUT_PATH = path.join(__dirname, 'input.txt');

const firstPartResult = calculateEngineSchematic(INPUT_PATH);
const secondPartResult = calculateEngineSchematic(INPUT_PATH, true);

console.log(`Result for part 1 is ${firstPartResult}`);
console.log(`Result for part 2 is ${secondPartResult}`);
