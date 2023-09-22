function solution(data, col, row_begin, row_end) {
    let sum_list = [];
    // 1. col번째 컬럼값을 기준으로 오름차순 정렬, 값이 동일하면 첫 번째 컬럼값 기준으로 내림차순 
    data.sort((a,b) => a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]);
    // 2. row_begin부터 row-end까지 i번째 행을 i로 나눈 나머지의 합 구하기
    for(let i=row_begin-1;i<row_end;i++){
        sum_list.push(data[i].reduce((acc,cur) => acc + cur % (i+1),0));
    }
    // 각 자리수가 다르면 1, 나머지 0, 자리부족하면 0으로 채우기
    let answer = sum_list.reduce((acc,cur) => {
        let xor = '';
        let acc_binary = acc.toString(2);  
        let cur_binary = cur.toString(2); 
        if(acc_binary.length < cur_binary.length){
            acc_binary = '0'.repeat(cur_binary.length - acc_binary.length) + acc_binary;
        }else if(acc_binary.length > cur_binary.length){
            cur_binary = '0'.repeat(acc_binary.length - cur_binary.length) + cur_binary;
        }
        for(let i=0;i<acc_binary.length;i++){
            xor += acc_binary[i] !== cur_binary[i] ? '1' : '0';
        }
        return xor;
    },0)
    return parseInt(answer,2);
}