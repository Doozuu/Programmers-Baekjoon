function solution(begin, target, words) {
    let answer = Infinity;
    const visited = {};
    
    if(!words.filter(word => word === target).length) return 0;
    
    for(let word of words) visited[word] = false;
    
    function dfs(n, depth){
        visited[n] = true;
        
        const w = words.filter(word => [...word].filter((w,i) => w !== n[i]).length === 1);
        
        for(let word of w){
            if(word === target){
                answer = Math.min(answer, depth);
                return;
            }
            if(!visited[word]){
                dfs(word, depth+1);
            }
        }
    }
    
    dfs(begin, 1);
    
    return answer;
}