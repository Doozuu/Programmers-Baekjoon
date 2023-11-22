const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const S = input.slice(1, N + 1);
const test = input.slice(N + 1);

const map = new Map();
let answer = 0;

S.map((el) => map.set(el, 1));

test.map((el) => (map.get(el) ? answer++ : ""));

console.log(answer);
