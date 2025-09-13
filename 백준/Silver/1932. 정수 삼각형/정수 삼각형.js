const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const T = +input.shift();
const arr = input.map(el => el.split(' ').map(Number));

function solution(){
  for(let i=1;i<T;i++){
    for(let j=0;j<=i;j++){
      if(j === 0){
        arr[i][j] += arr[i-1][j];
      }else if(j === i){
        arr[i][j] += arr[i-1][j-1];
      }else{
        arr[i][j] += Math.max(arr[i-1][j-1], arr[i-1][j]);
      }
    }
  }

  console.log(Math.max(...arr[T-1]));
}

solution();