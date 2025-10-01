const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const N = +input[0];
const K = +input[1];

function solution(){
  let left = 1;
  let right = K;
  let answer = 0;

  while(left <= right){
    const mid = Math.floor((left + right) / 2);
    let cnt = 0;

    for(let i=1;i<=N;i++){
      cnt += Math.min(Math.floor(mid / i),N);
    }

    if(cnt < K) left = mid + 1;
    else{
      answer = mid;
      right = mid - 1;
    }
  }

  console.log(answer)
}

solution();
