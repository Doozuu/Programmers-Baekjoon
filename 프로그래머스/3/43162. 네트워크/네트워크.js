function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    
    function dfs(r){
        visited[r] = true;
        
        for(let i=0;i<n;i++){
            if(!visited[i] && computers[r][i]) dfs(i);
        }
    }
    
    for(let i=0;i<n;i++){
        if(!visited[i]){
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}