const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N,K] = input.shift().split(' ').map(Number);
const count = Array(21).fill(0)
let answer = 0;

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
    this.rear++
  }
  
  dequeue(){
    if(this.size() === 0) return undefined;

    const val = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    return val
  }

  head(){
    return this.storage[this.front]
  }
}

const queue = new Queue();

for(let i=0;i<N;i++){
  const len = input[i].length
  answer += count[len]
  queue.enqueue(len)
  count[len]++

  if(queue.size() > K){
    const old = queue.dequeue()
    count[old]--
  }
}


console.log(answer);