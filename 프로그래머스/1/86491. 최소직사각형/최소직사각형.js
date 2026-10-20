function solution(sizes) {
    let w = 0;
    let h = 0;
    
    for(let [x,y] of sizes){
        if(x > y){
            w = Math.max(w,x);
            h = Math.max(h,y);
        }else{
            w = Math.max(w,y);
            h = Math.max(h,x);
        }
    }
    
    return w*h;
    
}