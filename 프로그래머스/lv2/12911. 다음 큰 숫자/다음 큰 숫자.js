function solution(n) {
    let answer = n+1;
    while(true){
        let n1 = n.toString(2).match(/1/g,'').length;
        let next = answer.toString(2).match(/1/g,'').length;
        if(n1 === next) break;
        answer++;
    }
    return answer;
}