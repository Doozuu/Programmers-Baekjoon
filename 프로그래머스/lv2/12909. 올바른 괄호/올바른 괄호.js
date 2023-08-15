function solution(s){
    let stack = 0;
    for(let n of s){
        if(n == "("){
            stack++;
            continue;
        }
        if(!stack) return false;
        stack--;
    }
    return stack === 0;
}