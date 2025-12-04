const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const shortcuts = {};

for(let i=0;i<N;i++){
  const words = input[i].split(' ');
  let isComplete = false;

  for(let j=0;j<words.length;j++){
    const a = words[j][0].toUpperCase();
    if(!shortcuts[a]){
      shortcuts[a] = true;
      words[j] = `[${words[j][0]}]${words[j].slice(1)}`;
      isComplete = true;
      break;
    }
  }

  for(let j=0;j<words.length&&!isComplete;j++){
    for(let k=0;k<words[j].length;k++){
      const a = words[j][k].toUpperCase();
      if(!shortcuts[a]){
        shortcuts[a] = true;
        words[j] = `${words[j].slice(0,k)}[${words[j][k]}]${words[j].slice(k+1)}`;
        isComplete = true;
        break;
      }
    }
  }

  input[i] = words.join(' ');
}

console.log(input.join('\n'));