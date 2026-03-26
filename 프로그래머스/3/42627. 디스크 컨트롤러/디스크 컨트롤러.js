function solution(jobs) {
    let answer = 0;
    let time = 0;
    let idx = 0;
    let cnt = 0;
    const N = jobs.length;
    const queue = [];
    const heap = [];
    
    jobs.sort((a,b) => a[0] - b[0]);
    
    while(cnt < N){
        // 요청 시간 된 거 대기 큐에 추가
        while(idx < N){
            const [request_time, duration] = jobs[idx];
            
            if(request_time === time){
                queue.push([request_time, duration]);
                // 우선순위대로 정렬
                if(queue.length > 1){
                    queue.sort((a,b) => a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0])
                }
                idx++;
            }else{
                break;
            }
        }
        
        // 소요시간 끝나면 제거
        if(heap.length > 0 && heap[0][1] === 0){
            const [request_time, duration] = heap.pop();
            // 반환 시간 구하기
            answer += time - request_time
            cnt++
        }
        
        // 힙 비어있고 대기 큐에 요소 있으면 추가 (우선순위대로)
        if(heap.length === 0 && queue.length > 0){
            heap.push(queue.shift())
        }
        
        // 소요시간 줄이기
        if(heap.length > 0) heap[0][1]--;
            
        time++;
    }
    
    return Math.floor(answer / N)
}