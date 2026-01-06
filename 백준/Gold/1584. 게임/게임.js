const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let idx = 0;
const N = +input[idx++];
const SIZE = 500;
const board = Array.from({length: SIZE+1}, () => Array(SIZE+1).fill(0)); 

class Deque{
  constructor(){
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size(){
    return this.rear - this.front
  }

  addRear(val){
    this.storage[this.rear++] = val;
  }

  deleteRear(){
    if(this.size() === 0) return undefined;

    this.rear--
    const val = this.storage[this.rear]
    delete this.storage[this.rear]
    return val;
  }

  addFront(val){
    this.front--
    this.storage[this.front] = val
  }

  deleteFront(){
    if(this.size() === 0) return undefined;

    const val = this.storage[this.front]
    delete this.storage[this.front++]
    return val;
  }
}

if(N === 0 && +input[1] === 0){
  console.log(0);
  return;
}

for (let i = 0; i < N; i++) {
  const [X1,Y1,X2,Y2] = input[idx++].split(' ').map(Number); // 위험 구역
  let sx = X1 < X2 ? X1 : X2;
  let lx = X1 > X2 ? X1 : X2;
  let sy = Y1 < Y2 ? Y1 : Y2;
  let ly = Y1 > Y2 ? Y1 : Y2;

  for(let j=sx;j<=lx;j++){
    for(let k=sy;k<=ly;k++){
      board[j][k] = 1;
    }
  }
}

const M = +input[idx++];

for (let i = 0; i < M; i++) {
  const [X1,Y1,X2,Y2] = input[idx++].split(' ').map(Number); // 죽음 구역
  let sx = X1 < X2 ? X1 : X2;
  let lx = X1 > X2 ? X1 : X2;
  let sy = Y1 < Y2 ? Y1 : Y2;
  let ly = Y1 > Y2 ? Y1 : Y2;

  for(let j=sx;j<=lx;j++){
    for(let k=sy;k<=ly;k++){
      board[j][k] = -1;
    }
  }
}

const move = [[0,1], [0,-1], [-1,0], [1,0]];
const dist = Array.from({length: SIZE+1}, () => Array(SIZE+1).fill(Infinity));
const deque = new Deque();
deque.addRear([0,0]);
dist[0][0] = 0;

while(deque.size() > 0){
  const [x,y] = deque.deleteFront();

  for(let [dx,dy] of move){
    const nx = x+dx;
    const ny = y+dy;

    if(nx < 0 || nx >= SIZE+1 || ny < 0 || ny >= SIZE+1) continue;
    if(board[nx][ny] === -1) continue;

    const cost = dist[x][y] + board[nx][ny];

    if(cost < dist[nx][ny]){
      dist[nx][ny] = cost;

      if(board[nx][ny] === 0){
        deque.addFront([nx,ny])
      }else{
        deque.addRear([nx,ny])
      }
    }
  }
}

console.log(dist[SIZE][SIZE] === Infinity ? -1 : dist[SIZE][SIZE]);