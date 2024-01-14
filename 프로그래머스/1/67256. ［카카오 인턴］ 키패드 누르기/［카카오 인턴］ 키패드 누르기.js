function solution(numbers, hand) {
    function CalcDistance(val){
        let coordinate = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];
        for(let i=0;i<4;i++){
            for(let j=0;j<3;j++){
                if(coordinate[i][j] === val) return [i,j];
            }
        }
    }
    let answer = '';
    let right = '#';
    let left = '*';
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            answer+="L";
            left = numbers[i];
        }else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
            answer+="R";
            right = numbers[i] - 2;
        }else{
            let [r0,r1] = CalcDistance(right);
            let [l0,l1] = CalcDistance(left);
            let [t0,t1] = CalcDistance(numbers[i]);
            if(Math.abs(r0-t0) + Math.abs(r1-t1) > Math.abs(l0-t0) + Math.abs(l1-t1)){         answer+="L";
                left = numbers[i];
            }else if(Math.abs(r0-t0) + Math.abs(r1-t1) < Math.abs(l0-t0) + Math.abs(l1-t1)){
                answer+="R";
                right = numbers[i];
            }else{
                if(hand === "right"){
                    answer+="R";
                    right = numbers[i];
                }else{
                    answer+="L";
                    left = numbers[i];
                }
            }}
    }
    return answer;
}