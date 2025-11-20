const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();

function solution(){
  const answer = [];

  for(let test of input){
    let arr = test.split(' ').map(Number);
    const num = arr.shift();
    let cnt = 0;

    for(let i=1;i<20;i++){
      for(let j=0;j<i;j++){
        if(arr[i] < arr[j]) {
          const t = arr.splice(i,1);
          arr = [...arr.slice(0,j), ...t, ...arr.slice(j)];
          cnt += i-j;
          break;
        }
      }
    }

    answer.push([num, cnt]);
  }

  console.log(answer.map(a => a.join(' ')).join('\n'))
}

solution();