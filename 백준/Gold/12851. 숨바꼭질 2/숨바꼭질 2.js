const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const MAX = 100000;
const dist = Array(MAX + 1).fill(-1);
const cnt = Array(MAX + 1).fill(0);

const queue = [];
let head = 0;

queue.push(N);
dist[N] = 0;
cnt[N] = 1;

while (head < queue.length) {
  const cur = queue[head++];

  for (const next of [cur - 1, cur + 1, cur * 2]) {
    if (next < 0 || next > MAX) continue;

    // 처음 방문
    if (dist[next] === -1) {
      dist[next] = dist[cur] + 1;
      cnt[next] = cnt[cur];
      queue.push(next);
    }
    // 같은 최단 거리로 또 도달
    else if (dist[next] === dist[cur] + 1) {
      cnt[next] += cnt[cur];
    }
  }
}

console.log(dist[K]);
console.log(cnt[K]);