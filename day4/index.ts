function isAsc(i: number) {
  const n = i.toString().split('').map(e => parseInt(e));
  let v = true;
  for (let i = 0; i < n.length - 1; i++) {
    v = v && (n[i] <= n[i + 1]);
  }
  return v;
}

function hasDouble(i: number) {
  const n = i.toString().split('').map(e => parseInt(e));
  let v = false;
  for (let i = 0; i < n.length - 1; i++) {
    v = v || (n[i] === n[i + 1]);
  }
  return v;
}

function hasExplicitDouble(i: number) {
  const n = i.toString().split('').map(e => parseInt(e));
  let v = false;
  for (let i = 0; i < n.length - 1; i++) {
    v = v || (( (n[i] === n[i + 1]) && (i === 0 ? (n[i + 1] !== n[i + 2]) : ( (n[i + 1] !== n[i + 2]) && (n[i-1] !== n[i]) ) )));
  }
  return v;
}

function day4() {
  let count = 0;
  for (let i = 152085; i <= 670283; i++) {
    if (isAsc(i) && hasDouble(i)) {
      count += 1;
    }
  }
  console.log(count);

  let count2 = 0;
  for (let i = 152085; i <= 670283; i++) {
    if (isAsc(i) && hasDouble(i) && hasExplicitDouble(i)) {
      count2 += 1;
    }
  }
  console.log(count2);
}

export default day4;
