const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input[0]
const liquids = input[1].split(' ').map(Number).sort((a,b) => a-b);
let answer = [];

function twoPointer(arr){
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
    let sum = arr[left] + arr[right];

    if(answer.length === 0 || Math.abs(sum) < Math.abs(answer[2])){
      answer = [arr[left], arr[right], sum];
    }

    if(sum === 0){
      break;
    }else if(sum < 0){
      left++ 
    }else if(sum > 0){
      right-- 
    }
  }

  console.log(answer[0], answer[1])
}

twoPointer(liquids);