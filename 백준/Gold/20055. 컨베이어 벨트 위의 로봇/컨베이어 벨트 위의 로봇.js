const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let [N, K] = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);

let robots = Array(N).fill(false);  // 로봇 존재 여부
let step = 0;

while (true) {
  step++;

  // 1. 벨트 & 로봇 회전
  A.unshift(A.pop());  // 내구도 회전
  robots.unshift(robots.pop()); // 로봇 회전
  robots[N - 1] = false; // 내리는 위치 로봇 제거

  // 2. 로봇 이동 (뒤에서 앞으로)
  for (let i = N - 2; i >= 0; i--) {
    if (robots[i] && !robots[i + 1] && A[i + 1] > 0) {
      robots[i] = false;
      robots[i + 1] = true;
      A[i + 1]--;

      if (i + 1 === N - 1) robots[i + 1] = false; // 내리는 위치면 즉시 내림
    }
  }

  // 3. 올리는 위치에 로봇 올리기
  if (A[0] > 0) {
    robots[0] = true;
    A[0]--;
  }

  // 4. 내구도 0인 칸 수 확인
  let zeroCount = A.filter(v => v === 0).length;
  if (zeroCount >= K) break;
}

console.log(step);
