import path from 'path';
import { calculateGameSum } from './calculateCubes';

const INPUT_PATH = path.join(__dirname, 'input.txt');

const { part1, part2 } = calculateGameSum(INPUT_PATH);

console.log(`Result for part 1 is ${part1}`);
console.log(`Result for part 2 is ${part2}`);
