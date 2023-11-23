const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const listen = input.slice(1, N + 1);
const see = input.slice(N + 1);

const map = new Map();

listen.map((el) => {
  map.set(el, 1);
});

let answer = see.filter((el) => !!map.get(el));

console.log(answer.length);
answer.sort().map((el) => console.log(el));
