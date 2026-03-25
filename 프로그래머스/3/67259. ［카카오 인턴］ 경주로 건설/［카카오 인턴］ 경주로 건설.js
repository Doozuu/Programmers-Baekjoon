function solution(board) {
    let answer = Infinity;
    const N = board[0].length;
    const move = [[1,0], [-1,0], [0,-1], [0,1]];
    const costs = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => Array(4).fill(Infinity))
    );
    
    board[0][0] = 1;
    
    function dfs(x,y,direction,cost){
        if(x === N-1 && y === N-1){
            answer = answer > cost ? cost : answer;
            return;
        }
        
        for (let nd = 0; nd < 4; nd++) {
            const [dx, dy] = move[nd];
            const nx = x+dx;
            const ny = y+dy;
            
            if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue; // 범위 넘을 경우
            if(board[nx][ny]) continue; // 벽일 경우
            
            const fee = (x === 0 && y === 0) || direction === nd ? 100 : 600; 
            const newCost = cost + fee;
            
            if (costs[nx][ny][nd] <= newCost) continue;
            
            costs[nx][ny][nd] = newCost;
            dfs(nx,ny,nd,newCost);
        }
    }
    
    dfs(0,0,1,0);
    
    return answer;
}