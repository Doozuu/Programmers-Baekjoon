function solution(scores) {
    const [wonhoA, wonhoB] = scores[0];
    const wonho_sum = wonhoA + wonhoB;
    
    scores.sort(([a,b],[c,d]) => c-a || b-d);
    
    let maxB = 0;
    let rank = 1;
    
    for(let [a,b] of scores){
        if(b < maxB){
            if(a === wonhoA && b === wonhoB) return -1;
            continue;
        }
            
        maxB = Math.max(maxB, b);
        
        if(a+b > wonho_sum) rank++;
    }
    
    return rank;
}