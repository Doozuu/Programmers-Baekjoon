const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const answer = [];

class Queue{
  constructor(){
    this.storage = {};
    this.head = 0;
    this.rear = 0;
  }

  size(){
    return this.rear - this.head;
  }

  empty(){
    return Number(this.size() === 0);
  }

  push(val){
    this.storage[this.rear] = val;
    this.rear++;
  }

  pop(){
    if(this.empty()) return -1;

    const removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;

    if(this.head === this.rear){
      this.head = 0;
      this.rear = 0;
    }

    return removed;
  }

  front(){
    if(this.empty()) return -1;
    return this.storage[this.head];
  }

  back(){ 
    if(this.empty()) return -1;
    return this.storage[this.rear - 1];
  }
}

const queue = new Queue();

for(let i=0;i<N;i++){
  const command = input[i];

  if(command === "pop"){
    answer.push(queue.pop())
  }else if(command === "size"){
    answer.push(queue.size())
  }else if(command === "empty"){
    answer.push(queue.empty())
  }else if(command === "front"){
    answer.push(queue.front())
  }else if(command === "back"){
    answer.push(queue.back())
  }else{
    const [c, n] = command.split(' ');
    if(c === "push") queue.push(Number(n));
  }
}

console.log(answer.join('\n'));