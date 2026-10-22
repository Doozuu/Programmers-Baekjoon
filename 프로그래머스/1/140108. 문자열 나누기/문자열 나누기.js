function solution(s) {
    let same_count = 0;
    let diff_count = 0;
    let first_letter = s[0];
    const answer = [];
    
    for(let i=0;i<s.length;i++){
        if(same_count > 0 && diff_count > 0 && same_count === diff_count){
            answer.push('-')
            first_letter = s[i];
            same_count = 0
            diff_count = 0
        }
        
        if(s[i] === first_letter){
            same_count++;
        }else{
            diff_count++;
        }
        answer.push(s[i]);
        
    }
    
    return answer.join('').split('-').length
}