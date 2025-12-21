const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const move = [[0,1], [1,0], [0,-1], [-1,0]]
let visited = Array.from({length: N}, () => Array.from({length : N}, () => false))
let answer = [0,0];

function isSame(n, c){
  if(n === "R" || n === "G"){
    return c === "R" || c === "G"
  }else{
    return c === "B"
  }
}

function dfs(n, x, y, isRG){
  visited[x][y] = true;

  for(let [mx, my] of move){
    if(mx+x > -1 && mx+x < N && my+y > -1 && my+y < N && !visited[x+mx][y+my]){
      const isContinue = isRG ? isSame(n, input[x+mx][y+my]) : input[x+mx][y+my] === n
      if(isContinue){
        visited[mx+x][my+y] = true;
        dfs(n, mx+x, my+y, isRG);
      }
    }
  }
}

for(let i=0;i<N;i++){
  for(let j=0;j<N;j++){
    if(!visited[i][j]){
      dfs(input[i][j], i, j, false)
      answer[0]++;
    }
  }
}

visited = Array.from({length: N}, () => Array.from({length : N}, () => false))

for(let i=0;i<N;i++){
  for(let j=0;j<N;j++){
    if(!visited[i][j]){
      dfs(input[i][j], i, j, true)
      answer[1]++;
    }
  }
}

console.log(answer.join(' '));