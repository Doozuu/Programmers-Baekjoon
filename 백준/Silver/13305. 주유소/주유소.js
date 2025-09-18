const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const N = +input[0];
const distance = input[1].split(' ').map(Number);
const price = input[2].split(' ').map(Number);

function solution(){
  let answer = 0;
  let min_price = Infinity;

  for(let i=0;i<N-1;i++){
    min_price = Math.min(min_price, price[i]);
    answer += min_price * distance[i];
  }

  console.log(answer);
}

solution();