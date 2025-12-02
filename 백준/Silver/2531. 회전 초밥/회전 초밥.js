const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, d, k, c] = input[0].split(" ").map(Number);
const sushi = input.slice(1).map(Number);
const count = Array(d + 1).fill(0);
let currentType = 0;
let maxType = 0;

// 초기 윈도우 세팅
for (let i = 0; i < k; i++) {
    if (count[sushi[i]] === 0) currentType++;
    count[sushi[i]]++;
}

// 한 번에 슬라이딩 윈도우
for (let i = 0; i < N; i++) {
    // 쿠폰 적용
    maxType = Math.max(maxType, count[c] === 0 ? currentType + 1 : currentType);

    // 윈도우 이동 준비
    const outSushi = sushi[i];
    count[outSushi]--;
    if (count[outSushi] === 0) currentType--;

    const inSushi = sushi[(i + k) % N]; // 원형 처리
    if (count[inSushi] === 0) currentType++;
    count[inSushi]++;
}

console.log(maxType);