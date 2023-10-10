function solution(arrayA, arrayB) {
    function fnGCD(a,b){
        return a % b ? fnGCD(b,a%b): b;
    }
    let A_GCD = arrayA.reduce((acc,cur) => fnGCD(acc,cur), arrayA[0]);
    let B_GCD = arrayB.reduce((acc,cur) => fnGCD(acc,cur), arrayB[0]);
    let A_GCD_List = [];
    let B_GCD_List = [];
    let answer = [];
    for(let i=1;i<=A_GCD;i++){
        if(i !== 1 && A_GCD % i === 0) A_GCD_List.push(i);
    }
     for(let i=1;i<=B_GCD;i++){
        if(i !== 1 && B_GCD % i === 0) B_GCD_List.push(i);
    }
    let cnt = false;
    for(let i=0;i<A_GCD_List.length;i++){
        for(let j=0;j<arrayB.length;j++){
            if(arrayB[j] % A_GCD_List[i] === 0) cnt = true;
        }
        if(!cnt) answer.push(A_GCD_List[i]);
        cnt = false;
    }
    for(let i=0;i<B_GCD_List.length;i++){
        for(let j=0;j<arrayA.length;j++){
            if(arrayA[j] % B_GCD_List[i] === 0) cnt = true;
        }
        if(!cnt) answer.push(B_GCD_List[i]);
        cnt = false;
    }
    return answer.length > 0 ? Math.max(...answer) : 0;
}