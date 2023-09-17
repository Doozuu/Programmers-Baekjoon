function solution(n) {
    let answer = '';
    let arr = ['4','1','2'];
    while(n >= 1){
        answer = arr[n%3] + answer; 
        if(Math.ceil(n/3) -1 < 1) break;
        n = Math.ceil(n/3) -1;
    }
    return answer;   
}
