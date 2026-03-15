function solution(maps) {
    let answer = -1;
    const N = maps.length;
    const M = maps[0].length;
    const move = [[0,1],[1,0],[0,-1],[-1,0]];
    const queue = [];
    const visited = Array.from({length: N}, () => Array.from({length: M}, () => false));
   
    visited[0][0] = true;
    queue.push([0,0,1]);
    
    while(queue.length){
        const [x,y,dist] = queue.shift();
        
        if(x === N-1 && y === M-1){
            answer = dist;
            break;
        }
        
        for(let [dx,dy] of move){
            const nx = x+dx;
            const ny = y+dy;
            
            if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
            if(maps[nx][ny] === 0) continue;
            if(visited[nx][ny]) continue;
            
            visited[nx][ny] = true;
            queue.push([nx,ny,dist+1]);
        }
    }
    
    return answer;
}