function solution(genres, plays) {
    let answer = [];
    const obj = {};
    const plays_amount = {};
    
    for(let i=0;i<genres.length;i++){
        obj[genres[i]] = obj[genres[i]] ? {...obj[genres[i]], [i]: plays[i]} : {[i]: plays[i]};
        plays_amount[genres[i]] = (plays_amount[genres[i]] || 0) + plays[i];
    }
    
    const sorted_genres = Object.entries(plays_amount).sort((a,b) => b[1] - a[1]);
    
    for(let genre of sorted_genres){
        const g = genre[0];
        const play = Object.entries(obj[g]).sort((a,b) => b[1] - a[1]).slice(0,2);
        answer = [...answer, ...play.map(p => +p[0])];
    }
    
    return answer;
}