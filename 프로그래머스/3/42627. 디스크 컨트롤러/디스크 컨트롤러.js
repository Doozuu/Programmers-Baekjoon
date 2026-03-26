function solution(jobs) {
    let answer = 0;
    let time = 0;
    let idx = 0;
    let cnt = 0;
    const N = jobs.length;
    const queue = [];
    const heap = [];
    
    const jobs_with_number = jobs.map((j,i) => [i, j[0], j[1]]).sort((a,b) => a[1] - b[1]);
    
    while(cnt < N){
        // 요청 시간 된 거 대기 큐에 추가
        while(idx < jobs.length){
            const [num, request_time, duration] = jobs_with_number[idx];
            
            if(request_time === time){
                queue.push([num, request_time, duration]);
                // 우선순위대로 정렬
                if(queue.length > 1){
                    queue.sort((a,b) => {
                        if(a[2] !== b[2]){
                            return a[2] - b[2]
                        }else if(a[1] !== b[1]){
                            return a[1] - b[1]
                        }else{
                            return a[0] - b[0]
                        }
                    })
                }
                idx++;
            }else{
                break;
            }
        }
        
        // 소요시간 끝나면 제거
        if(heap.length > 0 && heap[0][2] === 0){
            const [num, request_time, duration] = heap.pop();
            // 반환 시간 구하기
            answer += time - request_time
            cnt++
        }
        
        // 힙 비어있고 대기 큐에 요소 있으면 추가 (우선순위대로)
        if(heap.length === 0 && queue.length > 0){
            heap.push(queue.shift())
        }
        
        // 소요시간 줄이기
        if(heap.length > 0) heap[0][2]--;
            
        time++;
    }
    
    return Math.floor(answer / N)
}