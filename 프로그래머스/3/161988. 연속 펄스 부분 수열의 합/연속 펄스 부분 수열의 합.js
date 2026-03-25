function solution(sequence) {
    let val1 = sequence[0];
    let val2 = sequence[0] * -1;
    
    let cur1 = val1;
    let cur2 = val2;
    
    let answer = Math.max(cur1, cur2);
    
    for(let i=1;i<sequence.length;i++){
        val1 = sequence[i] * (i % 2 ? -1 : 1)
        val2 = sequence[i] * (i % 2 ? 1 : -1)
        
        cur1 = Math.max(val1, cur1+val1)
        cur2 = Math.max(val2, cur2+val2)
        
        answer = Math.max(cur1, cur2, answer)
    }
    
    return answer;
}