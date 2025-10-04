function solution(friends, gifts) {
    const give = {};
    const take = {};
    const presentNums = {};
    const answer = {};
    const friendsLen = friends.length;
    
    for(let gift of gifts){
        const [A,B] = gift.split(' ');
        give[A] = give[A] ? [...give[A], B] : [B];
        take[B] = take[B] ? [...take[B], A] : [A];
    }
    
    for(let friend of friends){
        presentNums[friend] = (give[friend]?.length || 0) - (take[friend]?.length || 0);
    }
    
    for(let i=0;i<friendsLen-1;i++){
        const me = friends[i];
        for(let j=i+1;j<friendsLen;j++){
            const friend = friends[j];
            const giveLen = give[me]?.filter(el => el === friend).length || 0;
            const takeLen = take[me]?.filter(el => el === friend).length || 0;
                
            if((giveLen > 0 || takeLen > 0) && giveLen !== takeLen){
                if(giveLen > takeLen){
                    answer[me] = (answer[me] || 0) + 1;
                }else{
                    answer[friend] = (answer[friend] || 0) + 1;
                }
            }else{
                if(presentNums[me] > presentNums[friend]){
                    answer[me] = (answer[me] || 0) + 1;
                }else if(presentNums[me] < presentNums[friend]){
                    answer[friend] = (answer[friend] || 0) + 1;
                }
            }
        }
    }
    
    const presents = Object.values(answer);
    
    return presents.length > 0 ? Math.max(...presents) : 0;
}