function solution(s){
    let stack = [];
    for(let str of s){
        if(str === stack[stack.length-1]){
            stack.pop();
            continue;
        }
        stack.push(str);
    }
    return stack.length > 0 ? 0 : 1;
}