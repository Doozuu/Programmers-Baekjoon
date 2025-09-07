const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const N = +input[0];

function solution(){
  const three = [];
  const five = [];

  for(let i=3;i<=5000;i++){
    if(i % 3 === 0) three.push(i);
    if(i % 5 === 0) five.push(i);
  }

  for(let i=0;i<three.length;i++){
    for(let j=0;j<five.length;j++){
      if(three[i] + five[j] === N) return i+j+2;
      if(three[i] === N) return i+1;
      if(five[j] === N) return j+1;
    }
  }

  return -1;
}

console.log(solution());