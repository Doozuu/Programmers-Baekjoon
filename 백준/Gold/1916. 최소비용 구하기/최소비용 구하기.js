const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const M = +input[1];
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 2; i < M + 2; i++) {
  const [start, end, cost] = input[i].split(" ").map(Number);
  graph[start].push([end, cost]);
}

const [start, end] = input[M + 2].split(" ").map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx][1] > this.heap[parentIdx][1]) break;
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      idx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    let val = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return val;
  }

  bubbleDown() {
    let idx = 0;
    let n = this.heap.length;

    while (true) {
      let leftChild = idx * 2 + 1;
      let rightChild = idx * 2 + 2;
      let smallest = idx;

      if (leftChild < n && this.heap[leftChild][1] < this.heap[smallest][1])
        smallest = leftChild;
      if (rightChild < n && this.heap[rightChild[1]] < this.heap[smallest][1])
        smallest = rightChild;
      if (smallest === idx) break;

      [this.heap[smallest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[smallest],
      ];
      idx = smallest;
    }
  }
}

function dijkstra(N, graph, start) {
  const dist = Array(N + 1).fill(Infinity);
  dist[start] = 0;

  const pq = new MinHeap();
  pq.push([start, 0]);

  while (!pq.isEmpty()) {
    const [cur, curWeight] = pq.pop();

    if (dist[cur] < curWeight) continue;

    for (let [next, weight] of graph[cur]) {
      if (dist[next] > curWeight + weight) {
        dist[next] = curWeight + weight;
        pq.push([next, dist[next]]);
      }
    }
  }

  return dist;
}

const distance = dijkstra(N, graph, start);

console.log(distance[end]);