const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N,M]= input[0].split(' ').map(Number);
const times = input[1].split(' ').map(Number);
let answer = 0;

function BinarySearch(arr){
  let start = Math.max(...arr);
  let end = arr.reduce((acc,cur) => acc+cur);
  let mid;

  while(start <= end){
    mid = Math.floor((start + end) / 2);

    let cnt = 1;
    let sum = 0;

    for(let i=0;i<N;i++){
      if(sum + arr[i] <= mid){
        sum += arr[i]
      }else{
        sum = arr[i]
        cnt++
      }
    }

    if(cnt <= M){ 
      answer = mid;
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }

  console.log(answer)
}

BinarySearch(times)