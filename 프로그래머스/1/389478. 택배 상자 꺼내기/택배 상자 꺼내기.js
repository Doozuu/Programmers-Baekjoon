function solution(n, w, num) {
    const arr = Array.from({length : w}, () => []);
    let idx = 0;
    
    for(let i=1;i<=n;i++){
        if(Math.floor((i-1) / w) % 2){
          arr[w - ((i-1) % w) - 1].push(i);
          if(i === num) idx = w - ((i-1) % w) - 1;
        }else{
          arr[(i-1) % w].push(i);
          if(i === num) idx = (i-1) % w;
        }

    }
    
    return arr[idx].length - arr[idx].indexOf(num);
}