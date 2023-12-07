const input = require("fs").readFileSync("dev/stdin");
const N = Number(input);
let card = 1;

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

  toRear() {
    const val = this.queue[this.front];
    this.push(val);
    this.pop();
  }

  back() {
    return this.queue[this.rear - 1];
  }
}

const queue = new Queue();

while (card <= N) {
  queue.push(card++);
}

while (queue.size() > 1) {
  queue.pop();
  queue.toRear();
}

console.log(queue.back());