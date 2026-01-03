const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const LOTTO_COUNT = 6;
const answer = [];

function dfs(arr, start, path){
  if(path.length === LOTTO_COUNT){
    answer.push(path.join(' '))
    return;
  }

  for(let i=start;i<arr.length;i++){
    path.push(arr[i])

    dfs(arr, i+1, path)

    path.pop();
  }
}

for(let i=0;i<input.length-1;i++){
  const arr = input[i].split(' ').map(Number).slice(1);
  const path = [];

  dfs(arr, 0, path);

  if(i !== input.length -2) answer.push('')
}

console.log(answer.join('\n'))