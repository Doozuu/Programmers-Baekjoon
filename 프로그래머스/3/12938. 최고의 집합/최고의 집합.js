function solution(n, s) {
    let answer = [];
    let count = n;
    let left = s;
    
    if(n > s) return [-1];
    
    for(let i=0;i<n;i++){
        const val = Math.floor(left/count);
        answer.push(val);
        left -= val;
        count--;
    }
    
    return answer;
}