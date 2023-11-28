function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    
    if (cacheSize === 0) return cities.length * 5;
    
    for(let i=0;i<cities.length;i++){
        let city = cities[i].toLowerCase();
        if(cache.includes(city)){
           let idx = cache.indexOf(city);
           cache.splice(idx,1);
           cache.push(city);
           answer++;
        }else{
            if(cache.length === cacheSize){
              cache.shift();
            }
            cache.push(city);
            answer += 5;
        }
    }
    return answer;
}