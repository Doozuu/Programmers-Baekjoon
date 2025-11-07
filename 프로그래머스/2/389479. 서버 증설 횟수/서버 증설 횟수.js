function solution(players, m, k) {
  let answer = 0;
  const hourCount = 24;
  const expireList = [];

  for (let t = 0; t < hourCount; t++) {

    for (let i = expireList.length - 1; i >= 0; i--) {
      if (expireList[i] <= t) expireList.splice(i, 1);
    }

    const playersNow = players[t];
    const required = Math.floor(playersNow / m); 
    const active = expireList.length;
    if (required > active) {
      const need = required - active;
      answer += need;
      for (let j = 0; j < need; j++) {
        expireList.push(t + k);
      }
    }
  }

  return answer;
}
