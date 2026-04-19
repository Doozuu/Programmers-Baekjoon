const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
let idx = 0;

function count(str) {
  const count_arr = [0, 0, 0];

  for (let i = 0; i < 9; i++) {
    if (str[i] === "X") count_arr[0]++;
    if (str[i] === "O") count_arr[1]++;
    if (str[i] === ".") count_arr[2]++;
  }

  return count_arr;
}

function calcIsFinish(str) {
  const possibleFinish = [
    "012",
    "345",
    "678",
    "036",
    "147",
    "258",
    "048",
    "246",
  ];

  let xWin = false,
    oWin = false;

  for (let i = 0; i < possibleFinish.length; i++) {
    const [a, b, c] = possibleFinish[i].split("").map(Number);

    if (str[a] === str[b] && str[b] === str[c] && str[a] !== ".") {
      if (str[a] === "X") xWin = true;
      if (str[a] === "O") oWin = true;
    }
  }

  if (xWin && oWin) return [true, "BOTH"];
  if (xWin) return [true, "X"];
  if (oWin) return [true, "O"];
  return [false, ""];
}

while (true) {
  if (input[idx] === "end") break;

  let answer = "valid";
  const testcase = input[idx++];
  const [xCount, oCount, emptyCount] = count(testcase);

  // 규칙 1
  if (oCount > xCount) {
    console.log("invalid");
    continue;
  }

  const [isFinish, finishC] = calcIsFinish(testcase);

  if (isFinish) {
    // 규칙 2
    if (
      finishC === "BOTH" ||
      (finishC === "X" && xCount !== oCount + 1) ||
      (finishC === "O" && xCount !== oCount)
    )
      answer = "invalid";
  } else {
    // 규칙 3
    if (emptyCount > 0) answer = "invalid";
  }

  console.log(answer);
}