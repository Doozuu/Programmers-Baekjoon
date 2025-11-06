const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();
const tree = {};

for(let i=0;i<N-1;i++){
  const [n1, n2] = input[i].split(' ');
  tree[n1] = [...(tree[n1] ?? []), +n2];
  tree[n2] = [...(tree[n2] ?? []), +n1];
}

function BFS(start){
  const queue = [start];
  const answer = Array(N+1).fill(0); 
  let idx = 0;

  while(idx < queue.length){
    const node = queue[idx++]

    for(let n of tree[node]){
      if(answer[n] !== 0) continue;
      answer[n] = node;
      queue.push(n);
    }
  }

  return answer;
}

function solution(){
  const result = BFS(1);

  console.log(result.slice(2).join('\n'));
}

solution();