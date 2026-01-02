const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let T = +input[0];
let idx = 1;
const answer = [];

while(T > 0){
  const [N, M] = input[idx++].split(' ').map(Number);
  const A = input[idx++].split(' ').map(Number);
  const B = input[idx++].split(' ').map(Number).sort((a,b) => a-b);
  let cnt = 0;

  for(let i=0;i<A.length;i++){
    const v = BinarySearch(A[i],B);
    cnt += v;
  }

  answer.push(cnt)

  T--;
}

function BinarySearch(target, arr){
  let start = 0;
  let end = arr.length;

  while(start < end){
    let mid = Math.floor((start + end) / 2);

   if(arr[mid] < target){
      start = mid + 1;
    }else{
      end = mid;
    }
  }

  return start;
}

console.log(answer.join('\n'));