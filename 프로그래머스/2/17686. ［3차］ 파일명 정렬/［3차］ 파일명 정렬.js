function solution(files) {    
    function Seperate(name){
        let [head, number, tail] = ['','',''];
        
        for(let i=0;i<name.length;i++){
            if(name[i] !== ' ' && !Number.isNaN(Number(name[i]))){
                number += name[i];
                if(Number.isNaN(Number(name[i+1]))){
                    tail = name.slice(i+1);
                    break;
                }
            }else{
                head += name[i];
            }
        }
        return [head, Number(number), tail];
    }

    return files.sort((a,b) => {
        const [head1, number1] = Seperate(a); 
        const [head2, number2] = Seperate(b);
        
        if(head1.toUpperCase() === head2.toUpperCase()){
            if(number1 === number2){
                return;
            }
            return number1 - number2;
        }else{
            return head1.localeCompare(head2);
        }
    })
}