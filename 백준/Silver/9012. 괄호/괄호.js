const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const K = +input.shift();

function solution(){
  const answer = [];
  let count = 0;
  let pass = false;

  for(let i=0;i<K;i++){
    for(let j=0;j<input[i].length;j++){
      if(count < 0){
        answer.push('NO');
        pass = true;
        break;
      }
      count += input[i][j] === '(' ? 1 : -1;
    }
    if(!pass) answer.push(count === 0 ? 'YES' : 'NO');
    count = 0;
    pass = false;
  }

  return answer.join('\n');
}

console.log(solution());