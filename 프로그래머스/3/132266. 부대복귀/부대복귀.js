function solution(n, roads, sources, destination) {
    const graph = Array.from({length: n+1}, () => []);
    const dist = Array.from({length : n+1}, () => -1);
    
    for(let [s, e] of roads){
        graph[s].push(e);
        graph[e].push(s);
    }
    
    const queue = [destination];
    let idx = 0;
    
    dist[destination] = 0;
    
    while(idx < queue.length){
        const node = queue[idx++];
        
        for(let val of graph[node]){
            if(dist[val] === -1){
                dist[val] = dist[node] + 1;
                queue.push(val);
            }
        }
    }
    
    return sources.map(source => dist[source]);
}