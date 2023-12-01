import path from 'path';
import { calibrateTrebuchet } from '../../src/01/trebuchetCalculations';

const INPUT_PATH_PART_ONE = path.join(__dirname, 'input.txt');
const INPUT_PATH_PART_TWO = path.join(__dirname, 'input2.txt');


describe('testing day 1', () => {
    test('Correctly computing part 1', () => {
        const calibrations = calibrateTrebuchet(INPUT_PATH_PART_ONE);
        expect(calibrations).toBe(142);
    });
    test('Correctly computing part 2', () => {
        const calibrations = calibrateTrebuchet(INPUT_PATH_PART_TWO, true);
        expect(calibrations).toBe(281);
    });
});
