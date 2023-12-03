import { parseInput } from '../lib/parseInput';

type OperatorPosition = `${number}_${number}`;

// It's faster to find substring than to use RegExp
const NUMBERS_STRING = '0123456789';

// Any special character which is not a number or a dot
const isOperator = (char?: string): boolean => typeof char === 'string' && char !== '.' && !NUMBERS_STRING.includes(char);

// Convert coordinates to Map key
const coordinatesToKey = (x: number, y: number): OperatorPosition => `${x}_${y}`;

const getOperatorPosition = (input: Array<string>, startX: number, endX: number, y: number): OperatorPosition | null => {
    const currentRow = input[y];
    // Left substring
    if (startX >= 1 && isOperator(currentRow[startX - 1])) return coordinatesToKey(startX - 1, y);

    // Right substring
    if (endX < currentRow.length && isOperator(currentRow[endX + 1])) return coordinatesToKey(endX + 1, y);

    // Top substring
    if (y > 0) {
        const row = y - 1;
        for (let x = startX - 1; x <= endX + 1; x++) {
            if (isOperator(input[row][x])) return coordinatesToKey(x, row);
        }
    }

    // Bottom substring
    if (y < input.length - 1) {
        const row = y + 1;
        for (let x = startX - 1; x <= endX + 1; x++) {
            if (isOperator(input[row][x])) return coordinatesToKey(x, row);
        }
    }


    return null;
};

export const calculateEngineSchematic = (inputPath: string, secondPart = false) => {
    const input = parseInput(inputPath).split('\n');

    // Map, which stores operator coordinates as `${x}_${y}` key with
    // corresponding numbers as a value
    const operatorsMap: Map<string, Array<number>> = new Map();

    for (let y = 0; y < input.length; y++) {
        const row = input[y];
        let currentNumber = '';

        for (let x = 0; x < row.length; x++) {
            const char = row[x];
            const isNumber = NUMBERS_STRING.includes(char);
            if (isNumber) {
                currentNumber += char;
            };

            // Current X is not number or reached the end of row
            const endOfNumber = currentNumber.length && x === row.length - 1 || !isNumber;

            if (endOfNumber && currentNumber.length) {
                const endIndex = x - 1;
                // Pass current number bounds - start index, end index and current y position
                const closestOperator = getOperatorPosition(input, endIndex - (currentNumber.length - 1), endIndex, y);
                if (closestOperator) {
                    const numbersInRow = operatorsMap.get(closestOperator) || [];
                    operatorsMap.set(closestOperator, [...numbersInRow, parseInt(currentNumber, 10)]);
                }
                currentNumber = '';
            }
        }
    }

    let result = 0;
    for (const value of operatorsMap.values()) {
        if (secondPart && value.length === 2) {
            result += value[0] * value[1];
            continue;
        }
        if (!secondPart) result += value.reduce((acc, val) => acc + val);
    }
    return result;
};
