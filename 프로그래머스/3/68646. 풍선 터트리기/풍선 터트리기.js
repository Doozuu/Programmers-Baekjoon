function solution(a) {
    let answer = 0;
    const leftMin = Array(a.length).fill(0);
    const rightMin = Array(a.length).fill(0);
    
    leftMin[0] = a[0];
    rightMin[a.length-1] = a[a.length-1];
    
    for(let i=1;i<a.length;i++){
        leftMin[i] = Math.min(leftMin[i-1], a[i])
    }
    
    for(let i=a.length-2;i>0;i--){
        rightMin[i] = Math.min(rightMin[i+1], a[i])
    }
    
    for(let i=0;i<a.length;i++){
        if(i === 0 || i === a.length-1){
            answer++
        }else if(a[i] < leftMin[i-1] || a[i] < rightMin[i+1]){
            answer++
        }
    }
    
    return answer
}