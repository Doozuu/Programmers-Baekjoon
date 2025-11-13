const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();

function solution(){
 console.log(input.map(i => i.split(' ').map(Number)).sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]).map(i => i.join(' ')).join('\n'))
}

solution();
