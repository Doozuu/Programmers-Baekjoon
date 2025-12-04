const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let [str, target] = input;
const queue = [target];
let answer = 0;

while(queue.length > 0){
  const s = queue.shift();
  if(s === str){
    answer = 1;
    break;
  }
  if(s.length === 0) break;

  if(s.startsWith('B')){
    queue.push(s.slice(1).split('').reverse().join(''));
  }
  if(s.endsWith('A')){
    queue.push(s.slice(0,s.length-1));
  }
}

console.log(answer);