const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let T = +input.shift();
let answer = '';
let idx = 0;

while(T > 0){
  const N = input[idx++];
  const prices = input[idx++].split(' ').map(Number);
  let max_profit = 0;
  let sum = 0;

  for(let i=N-1;i>0;i--){
    if(prices[i] > max_profit) max_profit = prices[i];
    if(prices[i-1] < max_profit) sum += max_profit - prices[i-1];
  }

  answer += sum + `\n`;
  T--;
}

console.log(answer.trim());