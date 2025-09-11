const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');

const memo = {};

function w(a,b,c){
  const key = `${a},${b},${c}`;

  if(memo[key]) return memo[key];
  if(a <= 0 || b <= 0 || c <= 0) return 1;
  if(a > 20 || b > 20 || c > 20) return w(20, 20, 20);
  if(a < b && b < c){
    memo[key] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
  }else{
    memo[key] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
  }

  return memo[key];
}

function solution(){
  const answer = [];

  for(let i=0;i<input.length-1;i++){
    const [a,b,c] = input[i].split(' ').map(Number);
    answer.push(`w(${a}, ${b}, ${c}) = ${w(a,b,c)}`);
  }

  console.log(answer.join('\n'));
}

solution();