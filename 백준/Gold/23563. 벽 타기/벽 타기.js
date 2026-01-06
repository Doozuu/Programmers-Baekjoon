const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [H, W] = input.shift().split(' ').map(Number);
const board = input.map(i => i.split(''));
const dist = Array.from({length: H}, () => Array(W).fill(Infinity)); 
const move = [[0,1], [0,-1], [1,0], [-1,0]]

class Deque{
  constructor(){
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size(){
    return this.rear - this.front
  }

  addFront(val){
    this.front--;
    this.storage[this.front] = val;
  }

  deleteFront(){
    const val = this.storage[this.front];
    delete this.storage[this.front++];
    return val;
  }

  addRear(val){
    this.storage[this.rear++] = val;
  }

  deleteRear(){
    this.rear--;
    const val = this.storage[this.rear];
    delete this.storage[this.rear];
    return val;
  }
}

const start = [];
const end = [];

for(let i=0;i<H;i++){
  if(start.length === 2 && end.length === 2) break;

  for(let j=0;j<W;j++){
    if(board[i][j] === "S"){
      start[0] = i
      start[1] = j
    }else if(board[i][j] === "E"){
      end[0] = i
      end[1] = j
    }
  }
}

function isAdjacent(x,y){
  for(let [dx,dy] of move){
    const nx = x+dx;
    const ny = y+dy;

    if(nx < 0 || nx >= H || ny < 0 || ny >= W) continue;
    if(board[nx][ny] === "#") return true;
  }
  return false;
}

const dq = new Deque();
dq.addRear(start);
dist[start[0]][start[1]] = 0;

while(dq.size() > 0){
  const [x,y] = dq.deleteFront();

  for(let [dx,dy] of move){
    const nx = x+dx;
    const ny = y+dy;

    if(nx < 0 || nx >= H || ny < 0 || ny >= W) continue;
    if(board[nx][ny] === "#") continue;

    const nextCost = isAdjacent(x,y) && isAdjacent(nx,ny) ? 0 : 1;
    const cost = dist[x][y] + nextCost;

    if(cost < dist[nx][ny]){
      dist[nx][ny] = cost;

      if(nextCost === 0){
        dq.addFront([nx,ny])
      }else{
        dq.addRear([nx,ny])
      }
    }
  }
}

console.log(dist[end[0]][end[1]]);