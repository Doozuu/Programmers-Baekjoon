function solution(priorities, location) {
    let count = 0;
    let arr = Array.from({length: priorities.length}, (_,i) => [i,priorities[i]])
    let idx = 0;
    function Push(idx, arr){
         for(let i=idx+1;i<arr.length;i++){
             if(arr[idx][1] < arr[i][1]) return arr[idx];
         }
         return ['pass', arr[idx]];
    }
    while(true){
        let result = Push(idx, arr);
        if(result[0] === 'pass'){
            count++;
            if(result[1][0] === location) return count;
        }else{
            arr.push(result);
        }
        idx++;
    }
}