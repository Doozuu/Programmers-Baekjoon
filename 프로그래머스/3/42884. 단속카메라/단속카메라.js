function solution(routes) {
    let answer = 0;
    let camera = -Infinity;
    
    routes.sort((a,b) => a[1] - b[1]);
    
    for(let [s, e] of routes){
        if(camera < s || camera > e){
            answer++;
            camera = e;
        }
    }
    
    return answer;
}