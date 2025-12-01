const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [n, d] = input.shift().split(" ").map(Number);
const shortcut = input.map(t => t.split(" ").map(Number));
const graph = Array.from({length : d+1}, () => []);
const distance = Array.from({length: d+1}, () => Infinity);
let prev = -1;

for(let [s, e, w] of shortcut){
  if(e <= d && e-s > w) graph[s].push([e,w])
}

for(let i=0;i<=d;i++){
  if(i) prev = distance[i-1];

  distance[i] = Math.min(distance[i], prev + 1);

  for(let [e, w] of graph[i]){
    if(distance[e] > distance[i] + w) distance[e] = distance[i] + w;
  }
}

console.log(distance[d]);