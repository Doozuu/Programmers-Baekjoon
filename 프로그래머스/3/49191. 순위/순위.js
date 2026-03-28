function solution(n, results) {
    const win = Array.from({ length: n + 1 }, () =>
        Array(n + 1).fill(false)
    );

    for (const [a, b] of results) {
        win[a][b] = true;
    }

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (win[i][k] && win[k][j]) {
                    win[i][j] = true;
                }
            }
        }
    }

    let answer = 0;

    for (let i = 1; i <= n; i++) {
        let known = 0;

        for (let j = 1; j <= n; j++) {
            if (i !== j && (win[i][j] || win[j][i])) {
                known++;
            }
        }

        if (known === n - 1) answer++;
    }

    return answer;
}