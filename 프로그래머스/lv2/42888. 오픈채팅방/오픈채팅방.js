function solution(record) {
    let answer = []; // 결과
    let list = {}; // {아이디: 닉네임}
    
    for(let i=0;i<record.length;i++){
        const [option, uid, nickname] = record[i].split(' ');
        if(option === "Enter" || option === "Change"){
            list[uid] = nickname;
        }
    }
    
    for(let i=0;i<record.length;i++){
        const [option, uid, nickname] = record[i].split(' ');
        if(option === "Enter"){
            answer.push(`${list[uid]}님이 들어왔습니다.`);
        }else if(option === "Leave"){
            answer.push(`${list[uid]}님이 나갔습니다.`);
        }
    }
    return answer;
}