const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);
let answer = -1;

function BFS(){
  const queue = [[A, 1]];

  while(queue.length){
    const [n, c] = queue.shift();

    if(n === B){
      answer = c;
      break;
    }

    const val = [n * 2, Number(n.toString() + '1')];
    val.forEach(v => {if(v <= B) queue.push([v,c+1])});
  }
}

BFS();

console.log(answer);