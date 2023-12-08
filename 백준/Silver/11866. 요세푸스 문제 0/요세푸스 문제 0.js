const input = require("fs").readFileSync("dev/stdin").toString();
const [N, K] = input.split(" ").map(Number);

class Queue {
  queue = [];
  front = 0;
  rear = 0;

  push(val) {
    this.queue[this.rear++] = val;
  }

  pop() {
    const val = this.queue[this.front];
    delete this.queue[this.front++];
    return val;
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
const answer = [];
let num = 1;
let idx = 1;

while (num <= N) {
  queue.push(num++);
}

while (answer.length < N) {
  const n = queue.pop();

  if (idx % K) {
    queue.push(n);
  } else {
    answer.push(n);
  }

  idx++;
}

console.log("<" + answer.join(", ") + ">");