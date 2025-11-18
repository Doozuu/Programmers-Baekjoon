const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();

function recursion(s, l, r, c){
  if(l >= r) return [1, c];
  if(s[l] !== s[r]) return [0,c];
  c++;

  return recursion(s, l+1, r-1, c);
}

function isPalindrome(str){
  return recursion(str, 0, str.length - 1, 1);
}

function solution(){
  const answer = [];

  for(let str of input){
    answer.push(isPalindrome(str));
  }

  console.log(answer.map(s => s.join(' ')).join('\n'));
}

solution();