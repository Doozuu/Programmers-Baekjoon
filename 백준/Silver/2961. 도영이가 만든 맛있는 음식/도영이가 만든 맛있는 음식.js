const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const ingredients = input.map(i => i.split(' ').map(Number));
let answer = Infinity;

for(let mask=1;mask<(1<<N);mask++){
  const subset = [];

  for(let i=0;i<N;i++){
    if(mask & (1 << i)){
      subset.push(ingredients[i])
    }
  }

  let sour = 1;
  let bitter = 0;

  for(let j=0;j<subset.length;j++){
    const [s,b] = subset[j];
    sour *= s 
    bitter += b
  }

  answer = Math.min(answer, Math.abs(sour - bitter))
}

console.log(answer)