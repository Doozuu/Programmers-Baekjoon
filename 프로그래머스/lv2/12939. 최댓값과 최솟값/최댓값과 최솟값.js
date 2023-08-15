function solution(s) {
    let arr = s.split(' ');
    return Math.min(...arr).toString() + ' ' + Math.max(...arr).toString();
}