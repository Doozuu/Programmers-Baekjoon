const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const str = input[0];
let idx = 0;

for(let k=1;;k++){
  const s = String(k);

  for(let ch of s){
    if(idx < str.length && ch === str[idx]){
      idx++;
      if(idx === str.length){
        console.log(k);
        return;
      }
    }
  }
}