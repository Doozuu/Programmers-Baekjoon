function solution(n, edge) {
    const graph = Array.from({length: n+1}, () => []);
    const visited = Array.from({length : n+1}, () => false);
    const distance = Array(n+1).fill(0);
    const queue = [[1,0]];
    
    for(let [s, e] of edge){
        graph[s].push(e)
        graph[e].push(s)
    }
    
    while(queue.length){
        const [node, dist] = queue.shift();
        
        if(visited[node]) continue;
        
        visited[node] = true;
        distance[node] = dist;
        
        for(let nextNode of graph[node]){
            queue.push([nextNode, dist+1]);
        }
    }
    
    const MAX = Math.max(...distance)
    
    return distance.filter((d) => d === MAX).length;
}