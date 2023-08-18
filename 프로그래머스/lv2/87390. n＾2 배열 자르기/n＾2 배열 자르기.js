function solution(n, left, right) {
    if (n === 1){
        return left >= 1 ? [] : [1];
    }

    const answer = [];
    let rowCount = Math.floor(left / n) + 1; // 시작값이 있는 행

    for (let i = left; i < right + 1; i++) {
        // i+1이 n으로 나누어 떨어지면 바깥 테두리에 있는 것이므로 n을 담고 행 1추가
        if ((i + 1) % n === 0) {
            answer.push(n);
            rowCount += 1;
            continue;
        }
        if (i % n < rowCount){
            answer.push(rowCount);
        }else{
            answer.push((i + 1) % n);
        }
    }
    return answer;
}