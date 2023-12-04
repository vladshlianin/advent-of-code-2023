import path from 'path';
import { calculatePoints, calculateScratchCards } from '../../src/04/calculateCards';

const INPUT_PATH = path.join(__dirname, 'input.txt');


describe('testing day 4', () => {
    test('Correctly computing part 1', () => {
        const cardsScore = calculatePoints(INPUT_PATH);
        expect(cardsScore).toBe(13);
    });
    test('Correctly computing part 2', () => {
        const calibrations = calculateScratchCards(INPUT_PATH);
        expect(calibrations).toBe(30);
    });
});
