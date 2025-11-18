const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');

function recursion(l, s, e){
  if(e-s < 2) return;

  const len = e-s;

  for(let i=s+len/3;i<s+len/3*2;i++){
    l[i] = ' '; 
  }

  recursion(l, s, s+len/3); 
  recursion(l, s + len/3 * 2, e);
}

function solution(){
  const answer = [];

  for(let str of input){
    const line = '-'.repeat(3 ** +str).split('');
    recursion(line, 0, line.length)
    answer.push(line.join(''));
  }

  console.log(answer.join('\n'));
}

solution();