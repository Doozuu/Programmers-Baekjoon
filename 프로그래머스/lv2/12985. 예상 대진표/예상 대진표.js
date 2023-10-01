function solution(n,a,b){
    var answer = 0;
    while(true){
        let max = Math.max(a,b);
        let min = Math.min(a,b);
        answer++;
        if(min + 1 ===  max && min % 2 === 1 && max % 2 === 0) break;
        a = a % 2 === 0 ? a/2 : (a+1)/2;
        b = b % 2 === 0 ? b/2 : (b+1)/2;
    }
    return answer;
}