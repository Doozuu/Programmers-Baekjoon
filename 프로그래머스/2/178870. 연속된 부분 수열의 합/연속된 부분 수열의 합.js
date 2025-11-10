function solution(sequence, k) {
    let answer = [];
    let answer_len = Infinity
    let start_index = 0
    let total = 0
    const len = sequence.length;
    
    for(let end_index = 0; end_index < len; end_index++){
        total += sequence[end_index]
        while(total > k){
            total -=sequence[start_index]
            start_index+=1 
        }
        if(total === k){
            if(answer_len > (end_index - start_index)){
                answer_len = end_index - start_index
                answer = [start_index, end_index]
            }
        }

    }

    return answer
}