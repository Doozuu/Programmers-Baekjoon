function solution(players, callings) {
    const map1 = new Map();
    const map2 = new Map();
    let answer = [];
    
    players.map((el,i) => map1.set(el,i)); // 이름,위치
    players.map((el,i) => map2.set(i,el)); // 위치,이름
    
    for(let i=0;i<callings.length;i++){
        if(map1.get(callings[i]) !== 0){
            const name = callings[i]; // 불린 선수 이름
            const score = map1.get(name); // 불린 선수 현위치
            const newScore = score - 1; // 불린 선수 바뀐위치
            const name2 = map2.get(newScore); // 불린 선수의 앞 선수 이름
            
            map1.set(name, newScore);
            map1.set(name2, score);
            map2.set(score, name2);
            map2.set(newScore, name);
        }
    }
    for(let [key, val] of map1.entries()) {
      answer[val] = key;
    }
    return answer;
}