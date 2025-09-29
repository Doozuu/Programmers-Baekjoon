const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number).sort((a,b) => a-b);
const M = +input[2];
const target = input[3].split(' ').map(Number);

function binarySearch(num){
  let left = 0;
  let right = N-1;

  while(left <= right){
    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === num){
      return 1;
    }else if(arr[mid] < num){
      left = mid + 1;
    }else if(arr[mid] > num){
      right = mid - 1;
    }
  }
  return 0;
}

function solution(){
  const answer = target.map(t => binarySearch(t));

  console.log(answer.join('\n'));
}

solution();
