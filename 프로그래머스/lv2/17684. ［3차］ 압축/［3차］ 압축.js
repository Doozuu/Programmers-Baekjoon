function solution(msg) {
    let answer = [];
    let dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let i = 0; 
    while(true){
        let cur = msg[i];
        let next = msg[i+1];
        let cur_idx = dictionary.indexOf(cur);
        if(!next){
            if(cur_idx > -1) answer.push(cur_idx + 1);
            return answer;
        }
        let next_idx = dictionary.indexOf(cur + next);
        if(next_idx > -1){
            while(next_idx > -1){
                cur = cur + next;
                i++;
                next = msg[i+1];
                next_idx = dictionary.indexOf(cur + next);
            }
            cur_idx = dictionary.indexOf(cur);
        }
        answer.push(cur_idx + 1); 
        dictionary.push(cur + next); 
        i++;
    }
    return answer;
}