const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const switch_list = input.shift().split(' ').map(Number);
const SN = +input.shift();

for(let student of input){
  const [S, C] = student.split(' ').map(Number);

  if(S === 1){
    for(let i=0;i<N;i++){
      if((i+1) % C === 0) switch_list[i] = 1 - switch_list[i];
    }
  }else if(S === 2){
    let left = C-1;
    let right = C-1;

    while(left - 1 >= 0 && right + 1 < N && switch_list[left-1] === switch_list[right+1]){
      left--;
      right++;
    }

    for(let i=left;i<=right;i++){
      switch_list[i] = 1 - switch_list[i];
    }
  }
}

let idx = 0;
while(idx < switch_list.length){
  console.log(switch_list.slice(idx, idx+20).join(' '));
  idx+=20;
}
