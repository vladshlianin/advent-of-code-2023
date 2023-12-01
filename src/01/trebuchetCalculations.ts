import { parseInput } from '../lib/parseInput';

const NATURAL_LANGUAGE_NUMBERS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const replaceNaturalLanguageNumbers = (input: string) =>
    NATURAL_LANGUAGE_NUMBERS.reduce((acc, val, index) => {
        // Preserve order and possible substring combinations like eightwo -> eight8eighttwo2two
        return acc.replaceAll(val, `${val}${index + 1}${val}`);
    }, input);


const NumberRegEx  = new RegExp(/\d/, 'g');

const extractDigits = (input: Array<string>, parseNaturalLanguageNumbers: boolean): Array<number> =>
    input.reduce<Array<number>>((acc, val) => {
        const baseStr = parseNaturalLanguageNumbers ? replaceNaturalLanguageNumbers(val): val;
        // Regex to extract numbers only. While regexps should be used sparingly
        // In this case its better than traversing an array multiple times
        // (since we should take into consideration input order - 
        // we have pick first and last number in string
        const digits = baseStr.match(NumberRegEx)?.join('');
        if (digits) {
            const leftNumber = digits[0];
            const rightNumber = digits[digits.length - 1];
            return [...acc, parseInt(`${leftNumber}${rightNumber}`, 10)]
        };
        return acc;
    }, []);

export const calibrateTrebuchet = (inputPath: string, parseNaturalLanguageNumbers = false): number => {
    const input = parseInput(inputPath).split('\n');
    return extractDigits(input, parseNaturalLanguageNumbers).reduce((acc, val) => {
        return acc + val;
    }, 0)
};
