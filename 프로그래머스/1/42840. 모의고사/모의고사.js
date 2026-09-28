function solution(answers) {
    const score = [0,0,0];
    const p1 = '12345';
    const p2 = '21232425';
    const p3 = '3311224455';
    const patterns = [p1, p2, p3];

    for(let i=0;i<answers.length;i++){
        const answer = answers[i];
        
        for(let j=0;j<3;j++){
            const p = patterns[j];
            if(answer === +p[i % p.length]) score[j]++;
        }
    }
    
    const max = Math.max(...score);
    
    return score.map((s,i) => s === max ? i+1 : 0).filter(v => v !== 0);

}