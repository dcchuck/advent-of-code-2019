import * as path from 'path';
import { readInput } from '../lib';

function simpleRequiredFuel(mass: number) {
  let requiredFuel = Math.floor((mass/3)) - 2;
  return requiredFuel;
}

function recursiveRequiredFuel(mass: number) {
  let requiredFuel = Math.floor((mass/3)) - 2;
  if (requiredFuel <= 0) {
    return 0;
  } else {
    return requiredFuel + recursiveRequiredFuel(requiredFuel)
  }
}

function day1 () {
  const inputPath = path.join(__dirname, 'input');
  const inputArray = readInput(inputPath).map(el => parseInt(el));

  const accumulator = (a: number, b: number) => a + simpleRequiredFuel(b);
  let part1 =  inputArray.reduce(accumulator, 0);
  console.log(`Part 1 Solution: ${part1}`);

  const accumulatorTwo = (a: number, b: number) => a + recursiveRequiredFuel(b);
  let part2 = inputArray.reduce(accumulatorTwo, 0);
  console.log(`Part 2 Solution: ${part2}`);
}

export default day1;
