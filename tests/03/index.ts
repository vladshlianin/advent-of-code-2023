import path from 'path';
import { calculateEngineSchematic } from '../../src/03/calculateEngineSchematic';

const INPUT_PATH = path.join(__dirname, 'input.txt');


describe('testing day 3', () => {
    test('Correctly computing part 1', () => {
        const calibrations = calculateEngineSchematic(INPUT_PATH);
        expect(calibrations).toBe(4361);
    });
    test('Correctly computing part 2', () => {
        const calibrations = calculateEngineSchematic(INPUT_PATH, true);
        expect(calibrations).toBe(467835);
    });
});
