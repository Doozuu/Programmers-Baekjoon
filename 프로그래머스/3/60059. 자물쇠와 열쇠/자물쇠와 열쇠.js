function solution(key, lock) {
    const lockSize = lock.length;
    const keySize = key.length;
    const board = Array.from({length: lockSize * 3}, () => Array(lockSize * 3).fill(0)) 
    
    // 보드 가운데에 락 복사
    for (let i = 0; i < lockSize; i++) {
        for (let j = 0; j < lockSize; j++) {
            board[i + lockSize][j + lockSize] = lock[i][j];
        }
    }
    
    // 90도 회전
    function rotate(key){
        const keySize = key.length;
        const rotated = Array.from({length: keySize}, () => Array(keySize).fill(0));
        
        for(let i=0;i<keySize;i++){
            for(let j=0;j<keySize;j++){
                rotated[j][keySize - 1 - i] = key[i][j];
            }
        }             
                                   
        return rotated;
    }
    
    // 모두 채워졌는지 체크
    function check(lockSize, board){
        for (let i = lockSize; i < lockSize * 2; i++) {
            for (let j = lockSize; j < lockSize * 2; j++) {
                if (board[i][j] !== 1) return false;
            }
        }
        return true;
    }
    
    for(let r=0;r<4;r++){
        key = rotate(key);
        
        for (let x = 0; x < lockSize * 2; x++) {
            for (let y = 0; y < lockSize * 2; y++) {
                // 더하기
                for (let i = 0; i < keySize; i++) {
                    for (let j = 0; j < keySize; j++) {
                        board[x + i][y + j] += key[i][j];
                    }
                }

                if (check(lockSize, board)) return true;

                // 다시 빼기
                for (let i = 0; i < keySize; i++) {
                    for (let j = 0; j < keySize; j++) {
                        board[x + i][y + j] -= key[i][j];
                    }
                }
            }
        }
    }

    return false;
}