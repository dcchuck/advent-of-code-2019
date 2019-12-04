import * as path from 'path';
import { someDay } from '../lib';

function day3() {
  const input = someDay(path.join(__dirname, 'input'));

  function getDirectionVector(direction: string) {
    switch (direction) {
      case 'L':
        return [-1, 0];
      case 'R':
        return [1, 0];
      case 'U':
        return [0, 1];
      case 'D':
        return [0, -1];
    }
  }
  function mapInstruction(instruction: string) {
    const direction = instruction.slice(0,1);
    const directionVector = getDirectionVector(direction);
    const length = parseInt(instruction.slice(1,instruction.length));
    const modifiers = [];
    for (let i = 1; i <= length; i++) {
      // const scaledVector = directionVector.map(e => e*i);
      modifiers.push(directionVector);
    }

    return modifiers;
  }

  function makePath(instructionSet: string[]) {
    let position = [0,0];
    const path = [];

    instructionSet.forEach(instruction => {
      const modifiers = mapInstruction(instruction);
      modifiers.forEach(modifier => {
        position = [ position[0] + modifier[0], position[1] + modifier[1] ]
        path.push(position);
      })
    })

    return path

  }

  const path1 = makePath(input[0]);
  const path2 = makePath(input[1]);
  console.log(path1);
  console.log(path2);
  const intersection = path1.filter(e => {
    const intt = path2.filter(ce =>
      {
        const turhth = (ce[0] === e[0]) && (ce[1] === e[1]);
        return turhth
      }
    )
    return intt.length > 0;
  });
  console.log(intersection);
  const distances = intersection.map(e => Math.abs(e[0]) + Math.abs(e[1]));
  console.log(distances);

  // const solution = [ -361, -656 ];

  // You need to find the intersection steps for every one to see which is best
  const steps = intersection.map(distancePair => {
    const e0 = distancePair[0];
    const e1 = distancePair[1];

    console.log(`Pair: [${e1}, ${e1}]`)
    let p1: number, p2: number;
    path1.filter((e,i) => {
      if ((e[0] === e0) && (e[1] === e1)) {
        console.log(`Path 1: ${i}`)
        p1 = i + 1;
      }
    })

    path2.filter((e,i) => {
      if ((e[0] === e0) && (e[1] === e1)) {
        console.log(`Path 2: ${i}`)
        p2 = i + 1;
      }
    })
    console.log(`Pair: [${e1}, ${e1}] total - ${p1 + p2}`);
    return (p1 + p2);
  })

  console.log(Math.min(...steps));
}

export default day3;
