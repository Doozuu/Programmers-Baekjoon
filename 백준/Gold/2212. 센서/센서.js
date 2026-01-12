const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0]; // 센서 개수
const K = +input[1]; // 집중국 개수
const sensors = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const distance = [];

for (let i = 0; i < sensors.length - 1; i++) {
  distance.push(sensors[i + 1] - sensors[i]);
}

distance.sort((a, b) => b - a).splice(0, K - 1);

console.log(distance.reduce((acc, cur) => acc + cur, 0));
