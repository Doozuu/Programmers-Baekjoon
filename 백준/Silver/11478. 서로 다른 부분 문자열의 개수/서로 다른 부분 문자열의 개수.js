const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .join("");

const arr = [];

for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    arr.push(input.slice(i, j + 1));
  }
}
console.log([...new Set(arr)].length);