function solution(triangle) {
    const row = triangle.length;
    
    for(let i=1;i<row;i++){
        const col = triangle[i].length;
        
        for(let j=0;j<col;j++){
            if(j === 0){
                triangle[i][j] += triangle[i-1][0];
            }else if(j === col - 1){
                triangle[i][j] += triangle[i-1][j-1];
            }else{
                if(triangle[i-1][j-1] > triangle[i-1][j]){
                    triangle[i][j] += triangle[i-1][j-1];
                }else{
                    triangle[i][j] += triangle[i-1][j];
                }
            }
        }
    }
    
    return Math.max(...triangle[row - 1]);
}                                             