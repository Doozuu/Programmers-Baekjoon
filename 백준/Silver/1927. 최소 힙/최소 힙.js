const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const list = input.map(Number);

class MinHeap{
  constructor(){
    this.heap = [];
  }

  isEmpty(){
    return this.heap.length === 0;
  }

  push(val){
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    if(this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  heapifyUp(){
    let index = this.heap.length - 1;

    while(index > 0){
      let parentIdx = Math.floor((index - 1) / 2);
      if(this.heap[index] >= this.heap[parentIdx]) break;
      [this.heap[index], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[index]];
      index = parentIdx;
    }
  }

  heapifyDown(){
    let index = 0;
    let length = this.heap.length;

    while(true){
      let smallest = index;
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;

      if(leftChild < length && this.heap[leftChild] < this.heap[smallest]){
        smallest = leftChild
      }
      if(rightChild < length && this.heap[rightChild] < this.heap[smallest]){
        smallest = rightChild;
      }
      if(smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

const minHeap = new MinHeap();
const answer = [];

for(let n of list){
  if(n === 0){
    answer.push(minHeap.pop() ?? 0)
  }else{
    minHeap.push(n)
  }
}

console.log(answer.join('\n'))