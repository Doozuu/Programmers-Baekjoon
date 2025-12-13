function solution(targets) {
    let pos = 0;
    let cnt = 0;
    targets.sort((a,b)  => a[1] - b[1]);
    
    for(let [s,e] of targets){
        if(pos <= s){
            cnt++
            pos = e
        }
    }
    
    return cnt;
}