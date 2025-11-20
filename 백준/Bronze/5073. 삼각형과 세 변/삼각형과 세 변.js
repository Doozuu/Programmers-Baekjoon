const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');

function solution(){
  const answer = [];

  for(let lines of input){
    const [a,b,c] = lines.split(' ').map(Number).sort((a,b) => a-b);

    if(a === 0) console.log(answer.join('\n'));

    if(a+b <= c){
      answer.push('Invalid')
    }else if(a === b && b === c){
      answer.push('Equilateral')
    }else if(a === b || b === c || a === c){
      answer.push('Isosceles')
    }else{
      answer.push('Scalene')
    }
  }
}

solution();