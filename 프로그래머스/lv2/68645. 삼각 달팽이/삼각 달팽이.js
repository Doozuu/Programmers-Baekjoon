function solution(n) {
  let answer = [];
  let [count, currentX, currentY] = [0, -1, 0];
  let arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  while (n > 0) {
    // n의 값이 유효할 때까지 반복
    for (let i = 0; i < n; i++) {
      // 위에서 아래로 내려가는 대각선
      currentX++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      // 왼쪽에서 오른쪽으로 이동
      currentY++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      // 아래에서 위로 내려가는 대각선
      currentX--;
      currentY--;
      count++;
      arr[currentX][currentY] = count;
    }
    n -= 3;
  }
    
  return arr.flat();
}