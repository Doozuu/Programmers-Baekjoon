function solution(operations) {
    let queue = {};
    let min = Infinity;
    let max = -Infinity;
    
    for(let operation of operations){
        const [type, num] = operation.split(' ');
        const NUM = Number(num);
        
        if(type === "I"){
            queue[NUM] = true;
            if(min > NUM) min = NUM;
            if(max < NUM) max = NUM;
        }else if(type === "D"){
            if(NUM === 1){
                delete queue[`${max}`];
                const result = Object.keys(queue).map(Number);
                if(result.length === 0){
                    max = -Infinity;
                    min = Infinity;
                }else{
                    max = Math.max(...result);
                }
            }else{
                delete queue[`${min}`];
                const result = Object.keys(queue).map(Number);
                if(result.length === 0){
                    max = -Infinity;
                    min = Infinity;
                }else{
                    min = Math.min(...result);
                }   
            }
        }
    }
    
    return Object.keys(queue).length === 0 ? [0,0] : [max,min];
}