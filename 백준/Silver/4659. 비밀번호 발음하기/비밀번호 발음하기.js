const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');

function isValid(str){
  const list = ['a', 'e', 'i', 'o', 'u'];
  const rest = 'bcdfghjklmnpqrstvwxyz'.split('');

  // 1 : 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
  let pass1 = false;
  for(let a of list){
    if(str.includes(a)) pass1 = true;
  }
  if(!pass1) return false;

  // 2 : 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
  for(let i=0;i<str.length-2;i++){  
    const a1 = str[i];
    const a2 = str[i+1]
    const a3 = str[i+2];

    if(rest.includes(a1) && rest.includes(a2) && rest.includes(a3)) return false;
    if(list.includes(a1) && list.includes(a2) && list.includes(a3)) return false;
  }

  // 3 : 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
  for(let i=0;i<str.length-1;i++){  
    if(str[i] === str[i+1] && str[i] !== 'e' && str[i] !== 'o') return false;
  }

  return true;
}

const answer = [];

for(let password of input){
  if(password === 'end') break;

  const valid = isValid(password);

  if(valid){
    answer.push(`<${password}> is acceptable.`)
  }else{
    answer.push(`<${password}> is not acceptable.`)
  }
}

console.log(answer.join('\n'));