const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input);
const arr = Array.from({length: n}, (e,i) => i+1);
const visited = Array(n).fill(false);
const result = [];

function backtracking(depth){
  if(depth === n){
    console.log(result.join(' '));
    return;
  }

  for(let i=0;i<n;i++){
    if(visited[i]) continue;
    
    visited[i] = true;
    result.push(arr[i]);

    backtracking(depth + 1);

    visited[i] = false;
    result.pop();
  }
}

backtracking(0);