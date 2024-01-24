function solution(lottos, win_nums) {
    let rank = [7,7];
    for(let i=0;i<lottos.length;i++){
       if(win_nums.indexOf(lottos[i]) >= 0){
           rank[0]--; 
           rank[1]--;
       }
       if(lottos[i] == 0) rank[0]--;
    }
    if(rank[0] > 6) rank[0] = 6; 
    if(rank[1] > 6) rank[1] = 6;
    return rank;
}