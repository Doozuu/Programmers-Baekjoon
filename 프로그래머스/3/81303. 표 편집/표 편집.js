function solution(n, k, cmd) {
    const prev = Array(n).fill(-1);
    const next = Array(n).fill(-1);
    const deleted = [];
    const answer = Array(n).fill("O");

    for (let i = 0; i < n; i++) {
        prev[i] = i - 1;
        next[i] = i + 1;
    }
    next[n - 1] = -1;

    let cur = k;

    for (const command of cmd) {
        const [type, x] = command.split(" ");

        if (type === "U") {
            let move = Number(x);
            while (move--) {
                cur = prev[cur];
            }
        } else if (type === "D") {
            let move = Number(x);
            while (move--) {
                cur = next[cur];
            }
        } else if (type === "C") {
            deleted.push([cur, prev[cur], next[cur]]);
            answer[cur] = "X";

            if (prev[cur] !== -1) next[prev[cur]] = next[cur];
            if (next[cur] !== -1) prev[next[cur]] = prev[cur];

            cur = next[cur] !== -1 ? next[cur] : prev[cur];
        } else if (type === "Z") {
            const [restored, p, n2] = deleted.pop();
            answer[restored] = "O";

            if (p !== -1) next[p] = restored;
            if (n2 !== -1) prev[n2] = restored;

            prev[restored] = p;
            next[restored] = n2;
        }
    }

    return answer.join("");
}