const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();
const tree = {};

for(let i=0;i<N;i++){
  const [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}

function DFS(start, order, arr){
  if(start === '.') return;
  const [left, right] = tree[start];

  switch(order){
    case 'preOrder':
      arr.push(start);
      DFS(left, 'preOrder', arr);
      DFS(right, 'preOrder', arr);
      break;
    case 'inOrder':
      DFS(left, 'inOrder', arr);
      arr.push(start);
      DFS(right, 'inOrder', arr);
      break;
    case 'postOrder':
      DFS(left, 'postOrder', arr);
      DFS(right, 'postOrder', arr);
      arr.push(start);
      break;
    default:
      break;
  }
  
  return arr.join('');
}

function solution(){
  const preResult = DFS('A', 'preOrder', []);
  const inResult = DFS('A', 'inOrder', []);
  const postResult = DFS('A', 'postOrder', []);

  console.log(preResult);
  console.log(inResult);
  console.log(postResult);
}

solution();