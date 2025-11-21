const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const head = [];
const heart = [];
const others = [0,0,0,0,0];

for(let i=0;i<N;i++){
  for(let j=0;j<N;j++){
    if(input[i][j] === '*' && head.length === 0){
      head.push(i,j);
      heart.push(i+1, j);
      break;
    }
  }
}

// 팔
for(let i=0;i<N;i++){
  if(input[heart[0]][i] === '*'){
    if(i<heart[1]) others[0]++;
    if(i>heart[1]) others[1]++;
  }
}

// 허리
for(let i=heart[0]+1;i<N;i++){
  if(input[i][heart[1]] === '*'){
    others[2]++;
  }else{
    break;
  }
}

// 다리
for(let i=heart[0]+others[2]+1;i<N;i++){
  if(input[i][heart[1]-1] === '*'){
    others[3]++;
  }
  if(input[i][heart[1]+1] === '*'){
    others[4]++;
  }
}

const answer = [];
answer.push(heart.map(h => h+1).join(' '));
answer.push(others.join(' '))

console.log(answer.join('\n'));