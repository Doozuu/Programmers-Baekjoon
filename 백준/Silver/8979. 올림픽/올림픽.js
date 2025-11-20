const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const [N, K] = input.shift().split(' ').map(Number);

function solution(){
  const nations = input.map(i => i.split(' ').map(Number));
  const obj = {};

  const sorted = nations.sort((a,b) => {
    if(b[1] !== a[1]){
      return b[1]-a[1]
    }else if(b[2] !== a[2]){
      return b[2]-a[2]
    }else{
      return b[3]-a[3]
    }
  })

  for(let i=0;i<N;i++){
    const [n1,g1,s1,b1] = sorted[i];

    if(i === 0){
      obj[n1] = 1;
      continue;
    }

    const [n,g,s,b] = sorted[i-1];

    obj[n1] = g === g1 && s === s1 && b === b1 ? obj[n] : i+1;
  }

  console.log(obj[K]);
}

solution();