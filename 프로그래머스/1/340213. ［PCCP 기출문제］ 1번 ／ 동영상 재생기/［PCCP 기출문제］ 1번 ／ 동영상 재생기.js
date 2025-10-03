function solution(video_len, pos, op_start, op_end, commands) {
    let [m, s] = pos.split(':').map(Number);
    const [sm, ss] = op_start.split(':').map(Number);
    const [em, es] = op_end.split(':').map(Number);
    const [vm, vs] = video_len.split(':').map(Number);
    const startTime = sm * 60 + ss;
    const endTime = em * 60 + es;
    const videoTime = vm * 60 + vs;
    
    function isOpening(curM, curS){
        const time = 60 * curM + curS;
        return time >= startTime && time <= endTime ? true : false;
    }
    
    for(let command of commands){  
        if(isOpening(m,s)) [m, s] = [em, es];
        let curTime = 60 * m + s;
        
        if(command === 'next'){
            if(videoTime - curTime < 10){
                [m, s] = [vm, vs];
            }else{
                [m, s] = [Math.floor((curTime + 10) / 60), (curTime + 10) % 60];
            }
        }else if(command === 'prev'){
            if(curTime < 10){
                [m, s] = [0, 0];
            }else{
                [m, s] = [Math.floor((curTime - 10) / 60), (curTime - 10) % 60];
            }
        }
        
        if(isOpening(m,s)) [m, s] = [em, es];
    }
    
    return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}