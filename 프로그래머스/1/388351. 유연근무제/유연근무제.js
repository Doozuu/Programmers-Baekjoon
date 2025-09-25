function solution(schedules, timelogs, startday) {
    let answer = 0;
    let sunday = 7 - startday;
    let saturday = startday === 7 ? 6 : 6 - startday;
    
    for(let i=0;i<schedules.length;i++){
        let time = Math.floor(schedules[i] / 100);
        let minute = schedules[i] % 100;
        if(minute < 50){
            minute += 10;
        }else{
            time++;
            minute %= 50;
        }
        const admitTime = time * 100 + minute;
        let pass = true;
        for(let j=0;j<7;j++){
           if(admitTime < timelogs[i][j] && j !== sunday && j !== saturday) pass = false;
        }
        if(pass) answer++;
    }
    
    return answer;
}

// 50분 부터는 10 더하면 시간이 바뀌어야 함.**