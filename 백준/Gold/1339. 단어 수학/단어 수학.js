const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, ...list] = input;

const map = new Map();
let number = 10;

list.map((item) =>
  [...item].map((a, idx) => {
    const val = map.get(a);
    map.set(a, (val || 0) + 10 ** (item.length - idx - 1));
  })
);

const mapEntries = Array.from(map);
let sortedMap = mapEntries.sort((a, b) => b[1] - a[1]);
let answer = sortedMap.reduce((acc, cur) => {
  number--;
  return acc + cur[1] * number;
}, 0);

console.log(answer);
