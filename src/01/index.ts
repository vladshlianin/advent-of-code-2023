import path from 'path';
import { calibrateTrebuchet } from './trebuchetCalculations';

const INPUT_PATH = path.join(__dirname, 'input.txt');

const firstPartResult = calibrateTrebuchet(INPUT_PATH);
const secondPartResult = calibrateTrebuchet(INPUT_PATH, true);

console.log(`Result for part 1 is ${firstPartResult}`);
console.log(`Result for part 2 is ${secondPartResult}`);
