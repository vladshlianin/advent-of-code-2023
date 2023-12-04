import path from 'path';
import { calculateGameSum } from '../../src/02/calculateCubes';

const INPUT_PATH = path.join(__dirname, 'input.txt');


describe('testing day 2', () => {
    const { part1, part2 } = calculateGameSum(INPUT_PATH);

    test('Correctly computing part 1', () => {
        expect(part1).toBe(8);
    });
    test('Correctly computing part 2', () => {
        expect(part2).toBe(2286);
    });
});
