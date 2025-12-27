const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let idx = 0;
const N = +input[idx++];
const board = Array.from({length: N}, () => Array(N).fill(0));
const K = Number(input[idx++]);

for(let i=0;i<K;i++){
  const [x,y] = input[idx++].split(' ').map(Number)
  board[x-1][y-1] = 2;
}

const L = Number(input[idx++]);
const turns = {};
for (let i = 0; i < L; i++) {
  const [t, d] = input[idx++].split(' ');
  turns[Number(t)] = d;
}

class Queue{
  constructor(){
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size(){
    return this.rear - this.front
  }

  enqueue(val){
    this.storage[this.rear] = val;
    this.rear++;
  }

  dequeue(){
    if(this.size() === 0) return undefined;

    const val = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    
    return val;
  }

  head(){
    return this.storage[this.front]
  }

  back(){
    return this.storage[this.rear - 1]
  }
}

const snake = new Queue();

let time = 0;
let dir = 0;
const direction = [[0,1],[1,0],[0,-1],[-1,0]]; 

snake.enqueue([0,0])
board[0][0] = 1

while(true){
  const [x, y] = snake.back();
  const [dx, dy] = direction[dir];

  const nx = x+dx;
  const ny = y+dy;

  time++

  if(nx < 0 || nx >= N || ny < 0 || ny >= N) break;
  if(board[nx][ny] === 1) break;

  const isApple = board[nx][ny] === 2; 
  
  snake.enqueue([nx,ny])
  board[nx][ny] = 1;

  if(!isApple){
    const [tx,ty] = snake.dequeue();
    board[tx][ty] = 0;
  }

  if(turns[time]){
    if(turns[time] === "D") dir = (dir+1)%4
    else dir = (dir+3)%4
  }
}

console.log(time);