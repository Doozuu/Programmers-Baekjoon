function solution(points, routes) {
  // 포인트 번호(1-based) -> 좌표
  const pos = points.map(([r, c]) => [r, c]);

  // 로봇 하나의 "시간별 위치 배열" 생성
  function buildPath(route) {
    const [startR, startC] = pos[route[0] - 1];
    const path = [[startR, startC]];

    let r = startR;
    let c = startC;

    for (let i = 1; i < route.length; i++) {
      const [targetR, targetC] = pos[route[i] - 1];

      // r 먼저 맞춘다
      while (r !== targetR) {
        r += r < targetR ? 1 : -1;
        path.push([r, c]);
      }

      // 그 다음 c 맞춘다
      while (c !== targetC) {
        c += c < targetC ? 1 : -1;
        path.push([r, c]);
      }
    }

    return path;
  }

  // 모든 로봇의 시간별 경로 생성
  const allPaths = routes.map(buildPath);

  // 가장 오래 움직이는 로봇 길이
  const maxTime = Math.max(...allPaths.map(path => path.length));

  let answer = 0;

  // 같은 시간대의 좌표 겹침 체크
  for (let t = 0; t < maxTime; t++) {
    const countMap = new Map();

    for (const path of allPaths) {
      // 이미 도착해서 사라진 로봇은 제외
      if (t >= path.length) continue;

      const [r, c] = path[t];
      const key = `${r},${c}`;
      countMap.set(key, (countMap.get(key) || 0) + 1);
    }

    // 같은 시간에 같은 좌표에 2대 이상 있으면 위험상황 1회
    for (const count of countMap.values()) {
      if (count >= 2) answer++;
    }
  }

  return answer;
}