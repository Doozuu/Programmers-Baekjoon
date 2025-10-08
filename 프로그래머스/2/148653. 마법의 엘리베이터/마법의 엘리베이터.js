function solution(storey) {
    let answer = 0;
    let mod = storey % 10;
    
    if(mod){
        storey += 5 > mod ? -mod : 10 - mod;
        answer += 5 > mod ? mod : 10 - mod;
    }
    
    for(let i=1;i<String(storey).length;i++){
        const left = storey % 10**(i+1);
        if(left > 5 * (10 ** i)){
            storey += (10 ** (i+1) - left);
            answer += (10 ** (i+1) - left) / (10**i);
        }else{
            storey -= left;
            answer += left / (10**i);
        }
    }
    
    return answer;
}