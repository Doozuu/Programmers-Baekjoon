const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const valid_words = {};

for(let word of input){
  if(word.length >= M){
    valid_words[word] = (valid_words[word] || 0) + 1;
  }
}

const result = Object.entries(valid_words).sort((a,b) => {
  if(b[1] !== a[1]){
    return b[1] - a[1]
  }
  if(b[0].length !== a[0].length){
    return b[0].length - a[0].length;
  }
  return a[0].localeCompare(b[0]);
})

console.log(result.map(w => w[0]).join('\n'));