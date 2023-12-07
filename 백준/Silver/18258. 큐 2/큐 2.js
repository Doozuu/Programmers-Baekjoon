const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const command = input.slice(1).map((el) => el.split(" "));
const answer = [];

class Queue {
  queue = [];
  frontIdx = 0;
  rearIdx = 0;

  push(val) {
    this.queue[this.rearIdx] = val;
    this.rearIdx++;
    return this.queue;
  }

  pop() {
    const val = this.queue[this.frontIdx];
    if (val) {
      delete this.queue[this.frontIdx++];
      return val;
    } else {
      return -1;
    }
  }

  size() {
    return this.rearIdx - this.frontIdx;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  front() {
    return this.size() === 0 ? -1 : this.queue[this.frontIdx];
  }

  back() {
    return this.size() === 0 ? -1 : this.queue[this.rearIdx - 1];
  }
}

const queue = new Queue();

command.map(([c, n]) => {
  switch (c) {
    case "push":
      queue.push(Number(n));
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
  }
});

console.log(answer.join("\n"));