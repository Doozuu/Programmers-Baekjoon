function solution(cards) {
    let answer = [];
    let visited = Array.from({length: cards.length}, () => false);
    let j = 0;
    for(let i=0;i<cards.length;i++){
        let temp = i;
            while(!visited[temp]){
                answer[j] = (answer[j] || 0) + 1;
                visited[temp] = true;
                temp = cards[temp] - 1;
            }
            j++;
    }
    answer.sort((a,b) => b-a);
    return answer[0] * answer[1] || 0;
}