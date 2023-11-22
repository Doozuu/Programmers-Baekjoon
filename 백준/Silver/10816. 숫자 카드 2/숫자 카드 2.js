const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N_list = input[1].split(" ").map(Number);
const M_list = input[3].split(" ").map(Number);
const map = new Map();

N_list.map((el) => {
  if (!map.get(el)) {
    map.set(el, 1);
  } else {
    map.set(el, map.get(el) + 1);
  }
});

console.log(M_list.map((el) => map.get(el) || 0).join(" "));
