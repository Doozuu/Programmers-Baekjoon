const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let T = Number(input[0]);
let idx = 1;

while (T--) {
  let W = input[idx++];
  let K = Number(input[idx++]);

  // 알파벳 위치 저장
  let pos = Array.from({ length: 26 }, () => []);
  for (let i = 0; i < W.length; i++) {
    let c = W.charCodeAt(i) - 97;
    pos[c].push(i);
  }

  let shortest = Infinity;
  let longest = -1;

  for (let c = 0; c < 26; c++) {
    let arr = pos[c];
    if (arr.length < K) continue;

    for (let i = 0; i + K - 1 < arr.length; i++) {
      let start = arr[i];
      let end = arr[i + K - 1];
      let length = end - start + 1;

      // 3번: 가장 짧은
      if (length < shortest) shortest = length;

      // 4번: 가장 긴
      if (length > longest) longest = length;
    }
  }

  if (shortest === Infinity) {
    console.log(-1);
  } else {
    console.log(shortest, longest);
  }
}
