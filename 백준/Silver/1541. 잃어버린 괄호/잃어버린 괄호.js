const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim();

function solution(){
  const arr = input.split('-');
  const sum_arr = arr.map((el) => {
    if(el.includes('+')){
      const list = el.split('+').map(Number);
      return list.reduce((acc, cur) => acc + cur, 0);
    }
    return +el;
  })
  let answer = sum_arr[0];

  for(let i=1;i<sum_arr.length;i++){
    answer -= sum_arr[i];
  }

  console.log(answer);
}

solution();