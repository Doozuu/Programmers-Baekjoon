// function solution(n, words) {
//     let answer = [0,0];
//     for(let i=0;i<words.length;i++){
//         if(i > 0){
//             for(let j=0;j<i;j++){
//                 if(words[i] === words[j]){
//                     answer[0] = i % n + 1
//                     answer[1] = Math.floor(i / n) + 1;
//                     return answer;
//                 }
//             }
//         } 
//         if(i < words.length -1 && words[i].slice(-1) !== words[i+1].slice(0,1)){
//             answer[0] = (i+1) % n + 1;
//             answer[1] = Math.floor((i+1) / n) + 1;
//             break;
//         }
//     }        
//     return answer;
// }







function solution(n, words){
    let used_words = [words[0]];
    for(let i=1;i<words.length;i++){
        let cur = words[i];
        let prev = used_words[i-1];
        if(used_words.includes(cur) || prev.at(-1) !== cur[0]){
            return [i % n + 1, Math.ceil((i+1) / n)];
        }else{
            used_words.push(words[i]);
        }
    }
    return [0,0];
}

// 탈락하는 케이스
// 1. 이전에 말한 단어 다시 말할 때
// 2. 단어가 이어지지 않을 때
// 마지막 순서 끝나면 처음부터
// [번호, 차례]
// 탈락자 없으면 [0,0]


