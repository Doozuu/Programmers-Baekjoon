const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = +input[0];
const commands = input.slice(1);
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  let c = commands[i];
  const sp = c.split(" ").map(Number);

  if (sp[0] === 1) {
    stack.push(sp[1]);
  } else if (sp[0] === 2) {
    if (stack.length !== 0) {
      let last = stack.pop();
      answer.push(last);
    } else {
      answer.push(-1);
    }
  } else if (sp[0] === 3) {
    answer.push(stack.length);
  } else if (sp[0] === 4) {
    if (stack.length !== 0) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  } else if (sp[0] === 5) {
    if (stack.length !== 0) {
      answer.push(stack.at(-1));
    } else {
      answer.push(-1);
    }
  }
}

console.log(answer.join("\n"));
