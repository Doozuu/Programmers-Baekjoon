const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input[0];
const time = input.slice(1).map(t => t.split(' ').map(Number)).sort((a,b) => { 
  if(a[1] !== b[1]){
    return a[1] - b[1]
  }else{
    return a[0] - b[0]
  }
});
let answer = 0;
let curEndTime = 0;

for(let [S, E] of time){
  if(curEndTime <= S){
    curEndTime = E;
    answer++;
  }
}

console.log(answer);
