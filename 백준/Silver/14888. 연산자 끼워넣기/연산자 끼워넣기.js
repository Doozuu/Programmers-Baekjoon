const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);
const op_arr = [];

input[2].split(' ').map((el,i) => {
  if(i === 0){
    const r = '+'.repeat(el).split('');
    op_arr.push(...r);
  }else if(i === 1){
    const r = '-'.repeat(el);
    op_arr.push(...r);
  }else if(i === 2){
    const r = '*'.repeat(el);
    op_arr.push(...r);
  }else if(i === 3){
    const r = '/'.repeat(el);
    op_arr.push(...r);
  }
});

function solution(){
  const operations = [];
  const visited = Array.from({length: op_arr.length}, el => false);

  function dfs(curr, visited){
    if(curr.length === op_arr.length){
      operations.push(curr.join(' '));
      return;
    }

    for(let i=0;i<op_arr.length;i++){
      if(!visited[i]){
        visited[i] = true;
        curr.push(op_arr[i]);
        dfs(curr, visited);
        visited[i] = false;
        curr.pop();
      }
    }
  }

  dfs([], visited);

  const set = new Set(operations);
  const filteredOperation = [...set];
  const result = [];

  for(let i=0;i<filteredOperation.length;i++){
    const op = filteredOperation[i].split(' ');
    let sum = arr[0];
    for(let j=1;j<N;j++){
      if(op[j - 1] === '+'){
        sum += arr[j];
      }else if(op[j - 1] === '-'){
        sum -= arr[j];
      }else if(op[j - 1] === '*'){
        sum *= arr[j];
      }else if(op[j - 1] === '/'){
        if(sum > 0){
          sum = Math.floor(sum / arr[j]);
        }else{
          sum = -Math.floor(-sum / arr[j]); 
        }
      }
    }
    result.push(sum);
  }

  console.log([Math.max(...result), Math.min(...result)].join('\n'))
}

solution();