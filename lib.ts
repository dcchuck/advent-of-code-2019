import * as fs from 'fs';

export function readInput(inputPath: string): string[] {
  const inputArray = fs.readFileSync(inputPath).toString().split('\n')
  inputArray.pop();
  return inputArray;
}

