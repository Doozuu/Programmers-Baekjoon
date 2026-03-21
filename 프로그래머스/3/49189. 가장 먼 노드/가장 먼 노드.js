function solution(n, edge) {
    const graph = Array.from({length: n+1}, () => []);
    const distance = Array(n+1).fill(-1);
    const queue = [1];
    
    distance[1] = 0;
    
    for(let [s, e] of edge){
        graph[s].push(e)
        graph[e].push(s)
    }
    
    while(queue.length){
        const node = queue.shift();
        
        for(let nextNode of graph[node]){
            if(distance[nextNode] !== -1) continue;
            distance[nextNode] = distance[node] + 1;
            queue.push(nextNode);
        }
    }
    
    const MAX = Math.max(...distance);
    
    return distance.filter((d) => d === MAX).length;
}