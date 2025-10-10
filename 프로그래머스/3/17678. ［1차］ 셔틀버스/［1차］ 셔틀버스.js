function solution(n, t, m, timetable) {
  let times = [];
  let currentBusTime = 540;

  for (let i = 0; i < timetable.length; i++) {
    let currentTime = timetable[i].split(":").map((item) => +item);
    let totalTime = currentTime[0] * 60 + currentTime[1];
    times.push(totalTime); // 먼저 분단위로 시간을 계산
  }

  times.sort((a, b) => a - b); // 오름차순으로 시간을 정렬

  for (let i = 0; i < n; i++) {
    let currentPeople = times.filter((time) => time <= currentBusTime).length;
    if (i === n - 1) {
      // 마지막 버스인 경우
      if (currentPeople >= m) {
        // 타야하는 승객수가 m이상인 경우 m-1에 나와 무조건 버스를 탐
        currentBusTime = times[m - 1] - 1;
      }
    } else {
      // 마지막 버스가 아닌 경우는 기존에 크루들을 태움
      if (currentPeople > m) {
        // 타야하는 사람의 수가 m보다 많을 때
        times.splice(0, m);
      }
      if (currentPeople <= m) {
        // 타야하는 사람의 수가 m과 같거나 적을 때
        times.splice(0, currentPeople);
      }
      currentBusTime += t; // currentBusTime을 셔틀 간격만큼 증가
    }
  }

  let hour = Math.floor(currentBusTime / 60);
  let min = currentBusTime % 60;

  return (
    String(hour < 10 ? "0" + hour : hour) +
    ":" +
    String(min < 10 ? "0" + min : min)
  );
}