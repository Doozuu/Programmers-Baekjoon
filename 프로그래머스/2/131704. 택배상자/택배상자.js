function solution(order) {
    let answer = 0;
    let curBox = 1;
    const sub_container = [];
    
    while(answer < order.length){
       if(order[answer] === curBox){
           answer++;
           curBox++;
           continue;
       }
     
       if(sub_container[sub_container.length - 1] === order[answer]){
           sub_container.pop();
           answer++;
       }else if(sub_container[sub_container.length - 1] > order[answer]){
           break;
       }else{
           sub_container.push(curBox++);
       }
    }
    
    return answer;
}