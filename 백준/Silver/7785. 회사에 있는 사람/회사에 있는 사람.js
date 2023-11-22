const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const N = +input[0];
const record = input.slice(1).map((el) => el.split(" "));
const map = new Map();

record.map(([name, e]) => map.set(name, e));
let answer = [];

for (let key of map.keys()) {
  if (map.get(key) !== "leave") answer.push(key);
}

answer.sort().reverse();

console.log(answer.join("\n"));