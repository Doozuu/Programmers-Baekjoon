function solution(n, costs) {
    let answer = 0;
    const graph = {};
    
    costs.sort((a,b) => a[2] - b[2]);
    
    function dfs(s, e, visited){
        if(!graph[s]) return false;
        if(s === e) return true;
        
        visited[s] = true;
        
        for(let node of graph[s]){
            if(!visited[node]){
                if(dfs(node, e, visited)) return true;
            }
        }
        
        return false;
    }
    
    for(let [s, e, cost] of costs){
        const visited = Array.from({length: n}, () => false);
        
        if(!dfs(s, e, visited)){
            graph[s] = graph[s] ? [...graph[s], e] : [e];
            graph[e] = graph[e] ? [...graph[e], s] : [s];
            answer += cost;
        }
    }
    
    return answer;
}