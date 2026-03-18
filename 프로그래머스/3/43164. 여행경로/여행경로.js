function solution(tickets) {
    const graph = {};

    // 그래프 구성
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    // 사전순 정렬 후 reverse (pop 쓰려고)
    for (let key in graph) {
        graph[key].sort().reverse();
    }

    const answer = [];

    function DFS(cur) {
        while (graph[cur] && graph[cur].length > 0) {
            const next = graph[cur].pop();
            DFS(next);
        }
        answer.push(cur);
    }

    DFS("ICN");

    return answer.reverse();
}