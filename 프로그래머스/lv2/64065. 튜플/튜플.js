function solution(s) {
    let answer = [];
    let arr = s.replaceAll(/[{}]/g,' ')
                .trim().split(' , ')
                .map(el => el.split(',')); 
    arr.sort((a,b) => a.length - b.length); 
    arr.map(el => el.map(n => {if(!answer.includes(n)) answer.push(n)}))
    return answer.map(n => +n);
}