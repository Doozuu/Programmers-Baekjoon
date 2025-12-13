function solution(board) {
    const boardStr = board.join('').split('');
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let Ocount = boardStr.filter(n => n === "O").length;
    let Xcount = boardStr.filter(n => n === "X").length;
    let Owin = false;
    let Xwin = false;
    
    for(let [a,b,c] of win){
        if(boardStr[a] === boardStr[b] && boardStr[a] === boardStr[c] && boardStr[a] !== '.'){
            if(boardStr[a] === "X"){
                Xwin = true
            }else{
                Owin = true;
            }
        }
    }
    
    if(Owin && Xwin) return 0;
    if(Owin && Ocount - 1 !== Xcount) return 0;
    if(Xwin && Ocount !== Xcount) return 0;
    if(Xcount > Ocount) return 0;
    if(Ocount > Xcount + 1) return 0;
    
    return 1;
}