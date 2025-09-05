const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(line => line.split(''));
let min = 64;

function solution(){
  for(let i=0;i<=N-8;i++){
    for(let j=0;j<=M-8;j++){
      let nextColor = 'B';
      let blackCount = 0;

      for(let k=i;k<i+8;k++){
        for(let l=j;l<j+8;l++){
          if(board[k][l] !== nextColor){
            blackCount++;
          }
          nextColor = nextColor === 'B' ? 'W' : 'B';
        }
        nextColor = nextColor === 'B' ? 'W' : 'B';
      }

      const whiteCount = 64 - blackCount;
      const curCount = Math.min(blackCount, whiteCount);

      min = Math.min(curCount, min);
    }
  }
  return min;
}

console.log(solution());