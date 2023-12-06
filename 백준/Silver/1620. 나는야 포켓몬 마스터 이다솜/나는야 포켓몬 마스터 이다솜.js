const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const dict = input.slice(1, N + 1);
const question = input.slice(N + 1, N + M + 1);
const answer = [];

const IdxMap = new Map();
const NameMap = new Map();

dict.map((el, i) => {
  IdxMap.set(i + 1, el);
  NameMap.set(el, i + 1);
});

question.map((q) => {
  let ans = Number.isNaN(Number(q)) ? NameMap.get(q) : IdxMap.get(Number(q));
  answer.push(ans);
});

console.log(answer.join("\n"));