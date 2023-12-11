function solution(survey, choices) {
    let answer = '';
    let obj = {};
    for(let i=0;i<survey.length;i++){
        let score = choices[i];
        if(score < 4){
            obj[survey[i][0]] = (obj[survey[i][0]] || 0) + Math.abs(score-4);
        }else{
            obj[survey[i][1]] = (obj[survey[i][1]] || 0) + Math.abs(score-4);
        }
    }
    function Test(t1,t2){
        if(!obj[t1] && !obj[t2]){
            answer += t1;   
        }else if(!obj[t1] || obj[t1] < obj[t2]){
            answer += t2;
        }else{
            answer += t1;
        }
    }
    Test("R","T");
    Test("C","F");
    Test("J","M");
    Test("A","N");
    return answer;
}