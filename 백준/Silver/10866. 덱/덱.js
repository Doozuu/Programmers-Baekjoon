const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift()
let answer = [];

class Deque{
  constructor(){
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  
  size(){
    return this.rear - this.front
  }

  push_front(val){
    this.front--;
    this.storage[this.front] = val;
  }

  push_back(val){
    this.storage[this.rear] = val;
    this.rear++
  }

  pop_front(){
    if(this.size() === 0) return -1;

    const val = this.storage[this.front]
    delete this.storage[this.front]
    this.front++

    return val
  }

  pop_back(){
    if(this.size() === 0) return -1;

    this.rear--
    const val = this.storage[this.rear]
    delete this.storage[this.rear]

    return val
  }
  
  empty(){
    return Number(this.size() === 0)
  }

  get_front(){
    if(this.size() === 0) return -1
    return this.storage[this.front]
  }

  get_back(){
    if(this.size() === 0) return -1
    return this.storage[this.rear - 1]
  }
}

const dq = new Deque();

for(let i=0;i<N;i++){
  const command = input[i].split(' ')

  if(command.length === 1){
    if(command[0] === "front"){
      answer.push(dq.get_front())
    }else if(command[0] === "back"){
      answer.push(dq.get_back())
    }else if(command[0] === "size"){
      answer.push(dq.size())
    }else if(command[0] === "empty"){
      answer.push(dq.empty())
    }else if(command[0] === "pop_front"){
      answer.push(dq.pop_front())
    }else if(command[0] === "pop_back"){
      answer.push(dq.pop_back())
    }
  }else{
    if(command[0] === "push_front"){
      dq.push_front(+command[1])
    }else if(command[0] === "push_back"){
      dq.push_back(+command[1])
    }
  }
}

console.log(answer.join('\n'))