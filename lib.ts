import * as fs from 'fs';

export function readInput(inputPath: string): string[] {
  const inputArray = fs.readFileSync(inputPath).toString().split('\n')
  inputArray.pop();
  return inputArray;
}

export function readSingleLineInput(inputPath: string): string[] {
  const inputArray = fs.readFileSync(inputPath).toString().split('\n')[0];
  const nextStep = inputArray.split(',');
  return nextStep;
}
