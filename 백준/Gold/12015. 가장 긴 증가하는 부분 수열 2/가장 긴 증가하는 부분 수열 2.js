const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);

function solution(){
  const answer = [arr[0]];

  for(let i=1;i<N;i++){
    if(answer.at(-1) < arr[i]){
      answer.push(arr[i]);
    }else{
      let left = 0;
      let right = N - 1;

      while(left < right){
        const mid = Math.floor((left + right) / 2);

        if(answer[mid] < arr[i]){
          left = mid + 1;
        }else{
          right = mid;
        }
      }

      answer[left] = arr[i];
    }

  }
  
  console.log(answer.length);
}

solution();
