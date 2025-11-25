const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let T = +input.shift();
let idx = 0;
const answer = [];

while(T > 0){
  const [n, k, t, m] = input[idx].split(' ').map(Number);
  const list = input.slice(idx+1, idx+m+1);
  const score_info = [[0]];

  for(let i=1;i<=n;i++){
    score_info[i] = Array.from({length: k+2}, () => 0);
  }

  for(let i=0;i<m;i++){
    const [id, num, score] = list[i].split(' ').map(Number);
    score_info[id][num-1] = Math.max(score_info[id][num-1], score);
    score_info[id][k]++;
    score_info[id][k+1] = i+1;
  }

  score_info.forEach((s,i) => {
    score_info[i][k+2] = s.slice(0,k).reduce((acc,cur) => acc+cur,0);
    score_info[i][k+3] = i
  });
  
  score_info.sort((a,b) => {
    if(a[k+2] === b[k+2]){
      if(a[k] === b[k]){
        return a[k+1] - b[k+1];
      }
      return a[k] - b[k];
    }else{
      return b[k+2] - a[k+2];
    }
  })

  score_info.forEach((s,i) => {
    if(s[k+3] === t){
      answer.push(i+1)
      return;
    }
  })

  idx+=m+1;
  T--;
}

console.log(answer.join('\n'))