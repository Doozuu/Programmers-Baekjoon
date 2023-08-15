function solution(s) {
    let answer = [0,0];
    while(s.length > 1){
        let len = s.replace(/[^0]/g,'').length;
        answer[0]++;
        answer[1] += len;
        s = (s.length - len).toString(2);
    }
    return answer;
}