const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, C] = input.shift().split(' ').map(Number)
const houseArr = input.map(Number).sort((a,b) => a-b);
let answer = 0;

function BinarySearch(arr){
  let start = 1;
  let end = arr[arr.length - 1] - arr[0];
  let mid;

  while(start <= end){
    mid = Math.floor((start + end) / 2); 

    let cnt = 1;
    let last = 0;

    for(let i=1;i<N;i++){
      if(arr[i] - arr[last] >= mid){
        cnt++
        last = i
      }
    }

    if(cnt >= C){
      answer = mid;
      start = mid + 1;
    }else{
      end = mid - 1;
    }
  }

  console.log(answer)
}

BinarySearch(houseArr)