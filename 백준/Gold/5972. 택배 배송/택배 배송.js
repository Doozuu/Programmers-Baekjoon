const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (const line of input) {
  const [a, b, c] = line.split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(item) {
    this.heap.push(item);
    this._up();
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._down();
    return top;
  }
  _up() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.heap[p][0] <= this.heap[i][0]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  _down() {
    let i = 0;
    while (true) {
      let l = i * 2 + 1;
      let r = l + 1;
      let smallest = i;
      if (l < this.heap.length && this.heap[l][0] < this.heap[smallest][0]) smallest = l;
      if (r < this.heap.length && this.heap[r][0] < this.heap[smallest][0]) smallest = r;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

const dist = Array(N + 1).fill(Infinity);
dist[1] = 0;

const pq = new MinHeap();
pq.push([0, 1]); // [비용, 노드]

while (!pq.isEmpty()) {
  const [cost, node] = pq.pop();

  if (cost > dist[node]) continue;
  if (node === N) break;

  for (const [next, w] of graph[node]) {
    const nextCost = cost + w;
    if (nextCost < dist[next]) {
      dist[next] = nextCost;
      pq.push([nextCost, next]);
    }
  }
}

console.log(dist[N]);
