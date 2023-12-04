import { parseInput } from '../lib/parseInput';

type Color = 'red' | 'green' | 'blue';

// Extract number and corresponding word as separate groups
const NumberRegEx  = new RegExp(/(\d+) (\w+)/, 'g');

const LIMITS: Record<Color, number> = {
    red: 12,
    green: 13,
    blue: 14,
};

const isColor = (input: string): input is Color => ['red', 'green', 'blue'].includes(input);

export const calculateGameSum = (inputPath: string) => {
    const input = parseInput(inputPath).split('\n');
    let gameIdSum = 0;
    let setProductSum = 0;
    for (const row of input) {
        const [left, right] = row.split(': ');
        const gameId = parseInt(left.split(' ')[1], 10);

        const minCubes = { red: 0, green: 0, blue: 0 };
        let gameIsValid = true;
        const matches = right.matchAll(NumberRegEx);
        for (const match of matches) {
            const number = parseInt(match[1], 10);
            const color = match[2];
            // Validate to satisfy type safety
            if (isColor(color)) {
                if (gameIsValid && LIMITS[color] < number) {
                    gameIsValid = false
                }
                minCubes[color] = Math.max(minCubes[color], number);
            }
        }
        // Part 1
        if (gameIsValid) gameIdSum += gameId;
        // Part 2
        setProductSum += minCubes.red * minCubes.green * minCubes.blue;
    }
    return { part1: gameIdSum, part2: setProductSum };
};
