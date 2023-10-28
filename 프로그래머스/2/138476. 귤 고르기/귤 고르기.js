function solution(k, tangerine) {
    let answer = 0;
    let obj = {};
    tangerine.map(el => obj[el.toString()] = (obj[el.toString()] || 0) + 1);
    let sorted = Object.entries(obj).sort(([,a],[,b]) => b - a);
    while(k > 0){
        k -= sorted[answer][1];
        answer++;
    }
    return answer;
}