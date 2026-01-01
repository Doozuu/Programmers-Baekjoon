const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [X,Y]= input[0].split(' ').map(Number);
const winningRate = Math.floor(Y * 100 / X);
let answer = -1;

function BinarySearch(){
  let start = 1;
  let end = 1000000000;

  while(start <= end){
    let mid = Math.floor((start + end) / 2);

    if(Math.floor((100 * (Y + mid)) / (X + mid)) > winningRate){
      answer = mid;
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }

  console.log(answer);
}

BinarySearch();