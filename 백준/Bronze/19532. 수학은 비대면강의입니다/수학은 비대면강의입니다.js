const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const [a,b,c,d,e,f] = input[0].split(' ').map(Number);

function solution(){
  const x = (e*c-b*f)/(e*a-d*b);
  const y = (d*c-a*f)/(d*b-a*e);

  return `${x} ${y}`;
}

console.log(solution());