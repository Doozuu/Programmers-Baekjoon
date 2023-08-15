function fib(v) {
    let fib_arr = [0,1,1];
    for (let i = 3; i <= v; i++) {
        fib_arr[i] = (fib_arr[i-1]%1234567 + fib_arr[i-2]%1234567);
    }
    return fib_arr[v];
}

function solution(n) {
    return fib(n)%1234567;
}