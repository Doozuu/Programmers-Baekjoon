function solution(n, words) {
    let answer = [0,0];
    for(let i=0;i<words.length;i++){
        if(i > 0){
            for(let j=0;j<i;j++){
                if(words[i] === words[j]){
                    answer[0] = i % n + 1
                    answer[1] = Math.floor(i / n) + 1;
                    return answer;
                }
            }
        } 
        if(i < words.length -1 && words[i].slice(-1) !== words[i+1].slice(0,1)){
            answer[0] = (i+1) % n + 1;
            answer[1] = Math.floor((i+1) / n) + 1;
            break;
        }
    }        
    return answer;
}