function solution(s){
    let answer = 0;
    
    function expand(l,r){
        while(l >= 0 && r < s.length && s[l] === s[r]){
            l--
            r++
        }
        return r-l-1
    }
    
    for(let i=0;i<s.length;i++){
        const odd = expand(i,i)
        const even = expand(i,i+1)
        answer = Math.max(answer, odd, even)
    }

    return answer;
}