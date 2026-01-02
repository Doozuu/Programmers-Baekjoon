const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input[0];
const str = input[1];
const type = {};
let answer = 0;
let right = 0;
  
for(let left=0;left<str.length;left++){
  while((Object.keys(type).length < N  || Object.keys(type).length === N && type[str[right]]) && right < str.length){
    type[str[right]] = (type[str[right]] || 0) + 1;
    right++;
  }

  let len = right - left;

  if(len > answer) answer = len;

  if(type[str[left]] === 1){
    delete type[str[left]];
  }else{
    type[str[left]]--;
  }
}

console.log(answer);