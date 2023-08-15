function solution(A,B){
    let answer = 0;
    let a = A.sort((a,b) => a-b);
    let b = B.sort((a,b) => b-a);
    a.map((n,i) => answer += n * b[i]);
    return answer;
}