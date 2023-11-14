function findMaxDivisor(num) {
    let minNum = 1;
    let maxNum = 1;
    
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            if (num / j <= 10000000) {
                minNum = j;
                return num / j;
            } else {
                maxNum = j;
            }
        }
    }
    
    if (num === 1) {
        return 0;
    } else if (minNum === 1) {
        return maxNum;
    }
}

function solution(begin, end) {
    const answer = [];

    for (let i = begin; i <= end; i++) {
        answer.push(findMaxDivisor(i));
    }

    return answer;
}