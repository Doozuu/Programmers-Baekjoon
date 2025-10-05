function solution(n, t, m, p) {
    let numbers = '';
    let num = 0;
    let maxLen = m*t;
    
    while(numbers.length < maxLen){
        const new_num = num.toString(n);
        numbers += new_num;
        num++;
    }
    
    const answer = numbers.slice(0,m*t).split('').filter((_,i) => i%m === p-1);
    
    return answer.join('').toUpperCase();
}