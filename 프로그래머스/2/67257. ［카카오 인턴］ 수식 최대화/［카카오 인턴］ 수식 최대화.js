function solution(expression) {
    let operator = expression.replace(/[0-9]/g,'');
    let distinct_operator = [...new Set(operator.split(''))];
    function change(num1, num2, op){
        if(op === '+'){
            return num1 + num2;
        }else if(op === '-'){
            return num1 - num2;
        }else{
            return num1 * num2;
        }
    }
    if(distinct_operator.length === 1){
        let op = distinct_operator[0];
        let num_list = expression.split(op).map(Number);
        return Math.abs(num_list.reduce((acc,cur) => change(acc,cur,op)));
    }else if(distinct_operator.length === 2){
        let [op1,op2] = distinct_operator;
        function operate(op1,op2){
            return expression.split(op2).map(el => {
                return el.split(op1).map(Number).reduce((acc,cur) => change(acc,cur,op1))
            }).reduce((acc,cur) => change(acc,cur,op2));
        }
        let candidate1 = operate(op1,op2);
        let candidate2 = operate(op2,op1);
        return Math.max(Math.abs(candidate1),Math.abs(candidate2));
    }else{
        let operator_list = ['*+-', '*-+', '+*-', '+-*', '-*+', '-+*'];
        let num_list = expression.split('+').join(' ').split('-').join(' ').split('*').join(' ').split(' ');
        let answer_list = [];
        operator_list.map(el => {
            let [op1,op2,op3] = el.split('');
            let candidate = expression.split(op1).map(el => {
            return el.split(op2).map(el2 => {
                return el2.split(op3).map(Number).reduce((acc,cur) => change(acc,cur,op3));
            }).reduce((acc,cur) => change(acc,cur,op2));
        }).reduce((acc,cur) => change(acc,cur,op1));
            answer_list.push(Math.abs(candidate));
        })
        return Math.max(...answer_list);
    }
}