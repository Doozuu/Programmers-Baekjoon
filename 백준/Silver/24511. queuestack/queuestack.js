const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const N = +input[0];
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const M = +input[3];
const C = input[4].split(' ').map(Number);

function solution(){
  const result = [];

  for(let i=0;i<N;i++){
    if(A[i] === 0) result.push(B[i]);
  }

  console.log([...result.reverse(), ...C].slice(0, M).join(' '));
}

solution();