const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const list = input.map(e => e.split(' ').map(Number));
const DP = Array(n).fill(0);

function solution(){
  for(let i=0;i<n;i++){
    const [period, profit] = list[i];

    if(i + period > n) continue;
    
    DP[i] += profit;

    for(let j=i+period;j<n;j++){
      DP[j] = Math.max(DP[j], DP[i])
    }
  }

  return Math.max(...DP);
}

console.log(solution());