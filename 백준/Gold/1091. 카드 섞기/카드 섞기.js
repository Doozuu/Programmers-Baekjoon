const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const P = input[1].split(" ").map(Number);
const S = input[2].split(" ").map(Number);
let cards = Array.from({ length: N }, (_, i) => i); // 초기값은 순서대로
let answer = 0;
const visited = {};

function isComplete(cards) {
  const divide = Array.from({ length: 3 }, () => []);

  for (let i = 0; i < N; i++) {
    divide[i % 3].push(cards[i]);
  }

  for (let i = 0; i < N; i++) {
    if (!divide[P[i]].includes(i)) return false;
  }

  return true;
}

function shuffle(cards) {
  const shuffled_cards = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    shuffled_cards[S[i]] = cards[i];
  }

  return shuffled_cards;
}

while (true) {
  // 더이상 섞어도 안 되면 종료
  if (visited[cards.join("")]) {
    console.log(-1);
    return;
  }

  // P되면 종료
  if (isComplete(cards)) {
    console.log(answer);
    return;
  }

  // 방문 체크
  visited[cards.join("")] = true;

  // 안 되면 섞기
  cards = shuffle(cards);

  // 섞는 횟수 증가
  answer++;
}