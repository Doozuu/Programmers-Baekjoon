const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const bingo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const answer = [];

function isValid(testcase){
  const testArr = [...testcase];
  let Xcount = testArr.filter(t => t === "X").length
  let Ocount = 9 - Xcount - testArr.filter(t => t === '.').length;

  let Xwin = false;
  let Owin = false;

  for(let [i1,i2,i3] of bingo){
    if(testcase[i1] === testcase[i2] && testcase[i2] === testcase[i3] && testcase[i1] !== '.'){
      if(testcase[i1] === "X"){
        Xwin = true;
      }else{
        Owin = true;
      }
    }
  }

  if(Xcount < Ocount || Xcount > Ocount + 1) return "invalid"
  if(Xwin && Owin) return "invalid"
  if(Xwin && Xcount !== Ocount + 1) return "invalid"
  if(Owin && Xcount !== Ocount) return "invalid"
  if(!Xwin && !Owin && Xcount + Ocount !== 9) return "invalid"
  return "valid"
}

for(let testcase of input){
  if(testcase !== 'end') answer.push(isValid(testcase))
}

console.log(answer.join('\n'))