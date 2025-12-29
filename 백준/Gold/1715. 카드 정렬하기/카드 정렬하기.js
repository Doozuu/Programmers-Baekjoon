const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input[0];

class MinHeap{
  constructor(){
    this.heap = [];
  }

  size(){
    return this.heap.length;
  }

  swap(idx1, idx2){
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  add(val){
    this.heap.push(val)
    this.bubbleUp()
  }

  poll(){
    if(this.size() === 0) return 0;
    if(this.size() === 1) return this.heap.pop()

    let val = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown()

    return val
  }

  bubbleUp(){
    let idx = this.size() - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while(this.heap[parentIdx] && this.heap[idx] < this.heap[parentIdx]){
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2)
    } 
  }

  bubbleDown(){
    let idx = 0;
    let leftChildIdx = idx * 2 + 1;
    let rightChildIdx = idx * 2 + 2;

    while((this.heap[leftChildIdx] && this.heap[idx] > this.heap[leftChildIdx]) || (this.heap[rightChildIdx] && this.heap[idx] > this.heap[rightChildIdx])){
      let smallestIdx = leftChildIdx;

      if(this.heap[rightChildIdx] && this.heap[rightChildIdx] < this.heap[leftChildIdx]){
        smallestIdx = rightChildIdx
      }

      this.swap(idx, smallestIdx)
      idx = smallestIdx;
      leftChildIdx = idx * 2 + 1;
      rightChildIdx = idx * 2 + 2;
    }
  }
}

const minHeap = new MinHeap();
let answer = 0;

for(let i=1;i<=N;i++){
  let v = +input[i];
  minHeap.add(v)
}

while(minHeap.size() > 1){
  let v1 = minHeap.poll();
  let v2 = minHeap.poll();

  let sum = v1 + v2;
  answer += sum;
  minHeap.add(sum)
}

console.log(answer)