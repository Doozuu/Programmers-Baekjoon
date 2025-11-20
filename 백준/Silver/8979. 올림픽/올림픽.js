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

  let order = 1;
  let preOrder = -1;
  let idx = 0;

  while(idx <= K){
    const [n, g, s, b] = sorted[idx];

    if(idx === N-1){
      obj[n] = order; 
      break; 
    }

    const [n2, g2, s2, b2] = sorted[idx+1];

    if(g !== g2 || s !== s2 || b !== b2){
      if(preOrder !== -1){
        obj[n] = preOrder;
        preOrder = -1;
      }else{
        obj[n] = order;
        order++;
      }
    }else if(g === g2 && s === s2 && b === b2){
      if(preOrder !== -1){
        obj[n] = preOrder;
      }else{
        obj[n] = order;
        preOrder = order;
      }
      order++;
    }

    idx++;
  }

  console.log(obj[K])
}

solution();