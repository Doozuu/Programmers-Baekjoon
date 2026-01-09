const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let S = input[0];
let T = input[1];

while(T.length > S.length){
  if(T[T.length-1] === 'A'){
    T = T.slice(0, -1); // 끝 A 제거
  } else if(T[T.length-1] === 'B'){
    T = T.slice(0, -1).split('').reverse().join(''); // 끝 B 제거 + 뒤집기
  } else {
    break;
  }
}

console.log(T === S ? 1 : 0);