function solution(m, n, puddles) {
    let answer = 0;
    const graph = Array.from({length: n}, () => Array(m).fill(-1));
    const MOD = 1000000007;
    const move = [[0,1],[1,0]];

    graph[0][0] = 1;
    
    for(let [px,py] of puddles){
        graph[py-1][px-1] = 0
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i === 0 && j === 0) continue; // 초기 좌표 패스
            if(graph[i][j] === 0) continue; // 물이 잠긴 지역 패스
            if(i-1 < 0){
                graph[i][j] = graph[i][j-1];
            }else if(j-1 < 0){
                graph[i][j] = graph[i-1][j];
            }else{
                graph[i][j] = (graph[i-1][j] + graph[i][j-1]) % MOD;    
            }
        }
    }
   
    return graph[n-1][m-1]
}