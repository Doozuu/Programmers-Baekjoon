function solution(n, works) {
    let max = Math.max(...works);
    const arr = Array(max).fill(0);
    
    for(let work of works) arr[work-1]++;
    
    while(n > 0 && max !== 0){
        if(arr[max-1]){
            if(max > 1) arr[max-2]++;
            arr[max-1]--;
            n--;
        }else{
            max--;
        }
    }
    
    return arr.reduce((acc,cur,idx) => acc + (idx+1)**2 * cur, 0);
}