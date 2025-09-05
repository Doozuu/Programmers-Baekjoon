const fs = require('fs');
const [numbers, cards] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = numbers.split(' ').map(Number);
const card_list = cards.split(' ').map(Number);

function solution(){
  let result = 0; 

  for(let i=0;i<N;i++){
    for(let j=i+1;j<N;j++){
      for(let k=j+1;k<N;k++){
        const sum = card_list[i] + card_list[j] + card_list[k];
        if(sum <= M){
          result = Math.max(result, sum);
        }
      }
    }
  }

  return result;
}

console.log(solution());