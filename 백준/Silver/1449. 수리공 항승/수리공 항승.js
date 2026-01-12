const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, L] = input[0].split(" ").map(Number);
const location = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let possible_range = L - 1;
let s = 0;
let e = 1;
let tape = 0;

while (s < N) {
  if (e < N && location[e] - location[s] <= possible_range) {
    e++;
  } else {
    s = e;
    e++;
    tape++;
  }
}

console.log(tape);