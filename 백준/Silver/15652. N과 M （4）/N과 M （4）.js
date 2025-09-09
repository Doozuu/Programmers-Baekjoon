const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim();

const [N, M] = input.split(' ').map(Number);

function solution(){
 const answer = [];
 const arr = Array.from({length: N}, (el, i) => i+1);

  function dfs(curr, idx){
    if(curr.length === M){
      answer.push(curr.join(' '));
      return;
    }

    for(let i=idx;i<N;i++){
      curr.push(arr[i]);
      dfs(curr, i);
      curr.pop();
    }
  }

  dfs([], 0);

  console.log(answer.join('\n'));
}

solution();