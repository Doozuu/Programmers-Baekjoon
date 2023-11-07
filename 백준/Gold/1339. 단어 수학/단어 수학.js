const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, ...list] = input;

const map = new Map();
let number = 9;

list.map((item) =>
  [...item].map((a, idx) => {
    const val = map.get(a);
    map.set(a, (val || 0) + 10 ** (item.length - idx - 1));
  })
);

const mapEntries = Array.from(map);
mapEntries
  .sort((a, b) => b[1] - a[1])
  .map((el) => {
    el[1] = number;
    number--;
  });
const sortedMap = new Map(mapEntries);

let sum = 0;
let transform = list.map((el) =>
  [...el].reduce((acc, cur) => acc + sortedMap.get(cur), "")
);
sum = transform.reduce((acc, cur) => +acc + +cur, 0);

console.log(sum);
