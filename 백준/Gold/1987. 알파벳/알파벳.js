const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [R, C] = input.shift().split(' ').map(Number);
const visited = Array.from({length: R+1}, () => Array(C+1).fill(false)); // 좌표 방문 여부
const alphabet_visited = Array(26).fill(false); // 알파벳 방문 여부
const move = [[0,1], [0,-1], [-1,0], [1,0]];
let answer = 0;

function dfs(x,y,d){
  if(visited[x][y]) return;

  visited[x][y] = true;
  const alphabet = input[x][y].charCodeAt() - 65;
  alphabet_visited[alphabet] = true;

  for(let [mx, my] of move){
    const nx = x+mx;
    const ny = y+my;

    if(nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
    const nextAlphabet = input[nx][ny].charCodeAt() - 65;
    if(alphabet_visited[nextAlphabet]) continue;
    if(!visited[nx][ny]) dfs(nx,ny,d+1)

    visited[nx][ny] = false;
    alphabet_visited[nextAlphabet] = false;
  }

  if(d > answer) answer = d
}

dfs(0,0,1)

console.log(answer);