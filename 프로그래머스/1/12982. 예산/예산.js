// function solution(d, budget) {
//     let ascend = d.sort((a,b) => a-b);
//     let money = 0;
//     let count = 0;
//     for(let i=0;i<d.length;i++){
//         money += ascend[i];
//         if(money <= budget) count++;
//         else break;
//     }
//     return count;
// }









// 가장 적은 금액부터 하면 되는거 아닌가

function solution(d,budget){
    let answer = 0;
    let sum = 0;
    d.sort((a,b) => a - b);
    for(let i=0;i<d.length;i++){
        if(d[i] + sum <= budget){
            answer++;
            sum += d[i];
        }else{
            break;
        }
    }
    return answer;
}