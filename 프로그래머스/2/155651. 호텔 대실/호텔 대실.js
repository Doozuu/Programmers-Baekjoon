function solution(book_time) {
    let stack = [];
    function transMinute(time){
        let [hour,minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }
    book_time.sort((a,b) => transMinute(a[0]) - transMinute(b[0]));
    for(let i=0;i<book_time.length;i++){
        let [start,end] = book_time[i];
        let j = 0;
        while(true){
            if(j === stack.length){
                stack.push(transMinute(end) + 10);
                break;
            }else{
                if(transMinute(start) >= stack[j]){
                    stack[j] = transMinute(end) + 10;
                    break;
                }else{
                    j++;
                } 
            }
        }
    }
    return stack.length;
}
// 퇴실 후 10분 청소

// 일단 시작 시간 기준으로 정렬 필요함
// 스택이 비어 있으면 넣고 아니면 새로운 배열 추가?