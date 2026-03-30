function solution(n, s, a, b, fares) {
    class MinHeap{
        constructor(){
            this.heap = [];
        }
        
        size(){
            return this.heap.length;
        }
        
        swap(idx1, idx2){
            [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
        }
        
        push(val){
            this.heap.push(val);
            this.up();
        }
        
        pop(){
            if (this.size() === 1) return this.heap.pop();
            
            const val = this.heap[0];
            const last = this.heap.pop();
            this.heap[0] = last;
            this.down();
            return val;
        }
        
        up(){
            let idx = this.size() - 1;
            while(idx > 0){
                let parent = Math.floor((idx - 1) / 2);
                if(this.heap[parent][1] <= this.heap[idx][1]) break;
                this.swap(idx, parent);
                idx = parent;
            }
        }
        
        down(){
            let idx = 0;
            const n = this.size();
            
            while(true){
                let leftChild = idx * 2 + 1
                let rightChild = idx * 2 + 2
                let min = idx;
                
                if(leftChild < n && this.heap[min][1] > this.heap[leftChild][1]){
                    min = leftChild
                }
                if(rightChild < n && this.heap[min][1] > this.heap[rightChild][1]){
                    min = rightChild
                }
                if(min === idx) break;
                this.swap(idx, min)
                idx = min;
            }
        }
    }
    
    const graph = Array.from({length: n+1}, () => []);
    let answer = Infinity;
    
    for(let [u,v,w] of fares){
        graph[u].push([v,w]);
        graph[v].push([u,w]);
    }
    
    function dijkstra(start){
        const dist = Array(n+1).fill(Infinity);
        dist[start] = 0;
        
        const pq = new MinHeap();
        pq.push([start, 0]);
        
        while(pq.size() > 0){
            const [cur, curDist] = pq.pop();
            
            if(dist[cur] < curDist) continue;
            
            for(let [next, weight] of graph[cur]){
                if(dist[next] > curDist + weight){
                    dist[next] = curDist + weight
                    pq.push([next, dist[next]])
                }
            }   
        }
        
        return dist
    }
    
    const distS = dijkstra(s)
    const distA = dijkstra(a)
    const distB = dijkstra(b)
    
    for(let i=1;i<=n;i++){
        answer = Math.min(answer, distS[i] + distA[i] + distB[i])
    }

    return answer
}