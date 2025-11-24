const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const visitor = input[1].split(' ').map(Number);
const max_visit = [0,0];
let sum = visitor.slice(0,X).reduce((acc,cur) => acc+cur,0);

for(let i=0;i<=N-X;i++){
  if(sum === max_visit[0]){
    max_visit[1]++;
  }else if(sum > max_visit[0]){
    max_visit[0] = sum;
    max_visit[1] = 1;
  }
  sum += visitor[i+X] - visitor[i];
}

console.log(max_visit[0] === 0 ? 'SAD' : max_visit.join('\n'));