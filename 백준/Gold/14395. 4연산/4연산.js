const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

const [s, t] = input.map(Number);

if (s === t) {
  console.log(0);
} else {
  let stack = [];
  stack.push([s, '']);
  let visited = {};
  let answer = [];

  while (stack.length) {
    let [n, calc] = stack.pop();

    if (!visited[n]) {
      visited[n] = true;
      if (n === t) {
        answer.push(calc);
      } else {
        stack.push([n + n, calc + '+']);
        stack.push([n * n, calc + '*']);
        stack.push([n - n, calc + '-']);
        stack.push([n / n, calc + '/']);
      }
    }
    stack.sort((a, b) => b[1].length - a[1].length);
  }

  if (answer.length === 0) {
    console.log(-1);
  } else if (answer.length === 1) {
    console.log(answer.join(''));
  } else {
    let list = answer.sort((a, b) => a.length - b.length); // 길이 오름차순 정렬
    let n = list.filter((el) => el.length === list[0].length); // 길이 같은거 여러개인지 체크
    if (n.length === 1) {
      console.log(n.join(''));
    } else {
      console.log(n.sort()[0]);
    }
  }
}
