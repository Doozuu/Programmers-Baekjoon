const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');

const T = +input.shift();
let idx = 0;

for (let t = 0; t < T; t++) {
    const N = +input[idx++];
    const arr = input[idx++].split(' ').map(Number);

    // 1. 팀별 선수 기록
    const teams = {};
    arr.forEach(team => {
        if (!teams[team]) teams[team] = [];
        teams[team].push(0); // 빈 배열로 선수 점수 기록 준비
    });

    // 2. 6명 팀만 후보
    const candidates = {};
    for (let team in teams) {
        if (teams[team].length === 6) {
            candidates[team] = [];
        }
    }

    // 3. 등수별 점수 부여
    let score = 1;
    arr.forEach(team => {
        if (candidates[team]) {
            candidates[team].push(score);
            score++;
        }
    });

    // 4. 팀 점수 계산 (상위 4명 합)
    const teamScores = [];
    for (let team in candidates) {
        const scores = candidates[team];
        const sum = scores.slice(0, 4).reduce((a,b) => a+b, 0);
        const fifth = scores[4]; // 5번째 선수 점수
        teamScores.push({team: +team, sum, fifth});
    }

    // 5. 점수 기준 정렬
    teamScores.sort((a,b) => {
        if (a.sum !== b.sum) return a.sum - b.sum; // 낮은 점수가 먼저
        return a.fifth - b.fifth; // 동점이면 5번째 선수 점수 비교
    });

    // 6. 우승팀 출력
    console.log(teamScores[0].team);
}
