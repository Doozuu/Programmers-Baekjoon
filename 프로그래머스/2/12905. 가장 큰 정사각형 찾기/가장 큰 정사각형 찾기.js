function solution(board){
    const N = board.length;
    const M = board[0].length;

    // 모든 입력이 0인지 체크
    let checkZero = 0;
    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
             checkZero+=board[i][j];
        }
    }
    if(checkZero === 0) return 0;
        
    let answer = 1;    
    for(let i = 1; i < N; i++){
        for(let j = 1; j < M; j++){
            if(board[i][j] > 0){
                // 1. 왼쪽, 위, 대각선을 체크 함으로써 정사각형 체크
                board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1;
                // 2. 여기서 직접 구해내야 효율성 체크 통과
                answer = Math.max(board[i][j], answer); 
            }
        }
    }
    return answer**2;
}
