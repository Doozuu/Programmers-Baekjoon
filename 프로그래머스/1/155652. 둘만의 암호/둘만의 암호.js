function solution(s, skip, index) {
    let answer = '';
    for(let i=0;i<s.length;i++){
        let arr = [];
        let j = 1;
        let num = s[i].charCodeAt(0);
        while(arr.length < index) {
            if(String.fromCharCode(num+j).charCodeAt(0) > 122) num-=26;
            let a = String.fromCharCode(num+j);
            if(skip.indexOf(a) === -1) arr.push(a);
            j++;
        }
        answer += arr[index-1];
    }
    return answer;
}