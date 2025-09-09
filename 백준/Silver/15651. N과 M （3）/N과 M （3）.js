const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim();

const [N, M] = input.split(' ').map(Number);

function solution(){
 const answer = [];
 const arr = Array.from({length: N}, (el, i) => i+1);

  function dfs(curr){
    if(curr.length === M){
      answer.push(curr.join(' '));
      return;
    }

    for(let i=0;i<N;i++){
      curr.push(arr[i]);
      dfs(curr);
      curr.pop();
    }
  }

  dfs([]);

  console.log(answer.join('\n'));
}

solution();