const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim();

const [N, M] = input.split(' ').map(Number);

function solution(){
 const answer = [];
 const arr = Array.from({length: N}, (el, i) => i+1);
 const visited = Array.from({length: N}, el => false);

  function dfs(idx, curr, visited){
    if(curr.length === M){
      answer.push(curr.join(' '));
      return;
    }

    for(let i=idx;i<N;i++){
      if(!visited[i]){
        visited[i] = true;
        curr.push(arr[i]);
        dfs(i, curr, visited);
        visited[i] = false;
        curr.pop();
      }
    }
  }

  dfs(0, [], visited);

  console.log(answer.join('\n'));
}

solution();