const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const K = +input.shift();
const arr = input.map(Number);

function solution(){
  const stack = [];

  for(let i=0;i<K;i++){
    if(arr[i] === 0){
      stack.pop();
    }else{
      stack.push(arr[i]);
    }
  }

  return stack.reduce((acc,cur) => acc + cur, 0);
}

console.log(solution());