const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const N = +input.shift();

class Node{
  constructor(value){
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque{
  constructor(){
    this.init();
  }

  init(){
    this.count = 0
    this.front = null;
    this.rear = null;
  }

  unshift(value){
    const node = new Node(value);

    if(!this.front){
      this.front = node;
      this.rear = node;
    }else{
      const prevFront = this.front;
      prevFront.prev = node;
      this.front = node;
      node.next = prevFront;
    }
    this.count += 1;
    return this.count;
  }

  shift(){
    if(this.count === 0) return null;

    const value = this.front.value;

    if(this.count === 1){
      this.init();
    }else{
      this.front = this.front.next;
      this.front.prev = null;
      this.count -= 1;
    }

    return value;
  }

  push(value){
    const node = new Node(value);

    if(this.count === 0){
      this.front = node;
      this.rear = node;
    }else{
      const prevRear = this.rear;
      prevRear.next = node;
      node.prev = prevRear;

      this.rear = node;
    }
    this.count += 1;

    return this.count;
  }

  pop(){
    if(this.count === 0) return null;

    const value = this.rear.value;

    if(this.count === 1){
      this.init();
    }else{
      this.rear = this.rear.prev;
      this.rear.next = null;
      this.count -= 1;
    }

    return value;
  }

  getFrontValue(){
    return this.front.value;
  }

  getRearValue(){
    return this.rear.value;
  }

  length(){
    return this.count;
  }
}


function solution(){
  const dequeue = new Deque();
  const input_arr = input.map(el => el.split(' ').map(Number));
  const answer = [];

  for(let i=0;i<N;i++){
    const length = dequeue.length();

    switch(input_arr[i][0]){
      case 1: dequeue.unshift(input_arr[i][1]); break;
      case 2: dequeue.push(input_arr[i][1]); break;
      case 3: answer.push(length > 0 ? dequeue.shift() : -1); break;
      case 4: answer.push(length > 0 ? dequeue.pop() : -1); break;
      case 5: answer.push(length); break;
      case 6: answer.push(length > 0 ? 0 : 1); break;
      case 7: answer.push(length > 0 ? dequeue.getFrontValue() : -1); break;
      case 8: answer.push(length > 0 ? dequeue.getRearValue() : -1); break;
    }
  }

  console.log(answer.join('\n'))
}

solution();