// function solution(keymap, targets) {
//     let answer = [];
//     let obj = {};
//     keymap.map(el => { 
//         for(let n of el){
//           if(obj[n] < el.indexOf(n)+1) continue;
//           obj[n] = el.indexOf(n)+1;   
//         }   
//     })
//     targets.map(el => {
//         let sum = 0;
//         for(let n of el){
//             sum += obj[n];
//         }
//         answer.push(sum);
//     })
//     return answer.map(n => n ? n : -1);
// }

function solution(keymap, targets) {
    const answer = [];
    const map = {}
    for (const items of keymap) {
        items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
    }
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
    }
    return answer;
}