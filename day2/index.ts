import * as path from 'path';
import { readSingleLineInput } from '../lib';

interface IIntCode extends Array<number> {}

interface IIntcodeComputer {
  instructionPointer: number;
  run: (p: IIntCode) => number;
}

class IntcodeComputer implements IIntcodeComputer {
  public instructionPointer: number;

  constructor() {
    this.instructionPointer = 0;
  }

  run(program: IIntCode): number {
    while(program[this.instructionPointer] !== 99) {
      const optcode     = program[this.instructionPointer];
      const parameter1  = program[this.instructionPointer + 1];
      const parameter2  = program[this.instructionPointer + 2];
      const parameter3  = program[this.instructionPointer + 3];

      if (optcode === 1) {
        program[parameter3] = program[parameter1] + program[parameter2];
      } else if (optcode === 2) {
        program[parameter3] = program[parameter1] * program[parameter2];
      }

      this.instructionPointer = this.instructionPointer + 4;
    }

    const result = program[0];

    console.log(result);

    this.instructionPointer = 0;

    return result;
  }

  findInputs(program: IIntCode) {
    const MAX = 50;
    const inputCombos = [];
    for (let i = 0; i < MAX; i++) {
      for (let j = 0; j < MAX; j++) {
        inputCombos.push([i,j]);
      }
    }

    let combo = 0;
    while (true) {
      const noun = inputCombos[combo][0];
      const verb = inputCombos[combo][1];

      const p = program.slice(0);
      p[1] = noun;
      p[2] = verb;

      const result = this.run(p);

      if (result === 19690720) {
        console.log(`Inputs: ${noun}, ${verb}`);
        console.log(`Solution: ${100 * noun + verb}`)
        break;
      }
      combo += 1;
    }
  }
}

function day2 () {
  const inputPath = path.join(__dirname, 'input');
  const rawIntcode = readSingleLineInput(inputPath).map(el => parseInt(el));

  const part1 = rawIntcode.slice(0);
  /**
   * Reinstantiate "1202 program alarm"
   */
  part1[1] = 12;
  part1[2] = 2;

  const part2 = rawIntcode.slice(0);

  const machina = new IntcodeComputer();

  machina.run(part1);
  machina.findInputs(part2);
}

export default day2;
