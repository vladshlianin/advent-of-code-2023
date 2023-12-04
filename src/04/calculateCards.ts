import { parseInput } from '../lib/parseInput';

const extractCardNumbers = (input: string): Array<string> => input
    .split(' ')
    // There may be more than one space between numbers
    .filter((substring) => substring.trim().length);

// Takes input with structure
// Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
const getResult = (row: string): number => {
    const [leftSide, rightSide] = row.split(' | ');
    const leftPart = leftSide.split(': ')[1]

    const leftNumbers = extractCardNumbers(leftPart);
    const rightNumbers = extractCardNumbers(rightSide);

    let winningNumbersInCard = 0;
    for (const rightNumber of rightNumbers) {
        if (leftNumbers.includes(rightNumber)) {
            winningNumbersInCard += 1;
        }
    }
    return winningNumbersInCard;
};

export const calculatePoints = (inputPath: string) => {
    const input = parseInput(inputPath).split('\n');
    return input.reduce((acc, val) => {
        const winningNumbersInCard = getResult(val);
        return winningNumbersInCard ? acc + Math.pow(2, winningNumbersInCard - 1) : acc;
    }, 0);
};

export const calculateScratchCards = (inputPath: string) => {
    const input = parseInput(inputPath).split('\n');

    // Store amount of copies in map with card number as key and amount of copies as value
    const copies: Map<number, number> = new Map();
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        const winningNumbersInCard = getResult(row);
        const cardCopies = copies.get(i) || 0;
        
        for (let nextCard = i + 1; nextCard <= i + winningNumbersInCard; nextCard++) {
            const currentCopies = copies.get(nextCard) || 0;
            copies.set(nextCard, currentCopies + cardCopies + 1);
        }
        result += 1 + cardCopies;
    }
    return result;
};
