function solution(n, t, m, p) {
    let numbers = '';
    let num = 0;
    
    while(numbers.length < m*t){
        numbers += num.toString(n);
        num++;
    }
    
    return numbers.slice(0,m*t).split('').filter((_,i) => i%m === p-1).join('').toUpperCase();
}