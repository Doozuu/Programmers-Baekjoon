function solution(survey, choices) {
  const map = new Map();
  const types = ["RT", "CF", "JM", "AN"].map((t) => t.split(""));

  function SetScore(target1, target2, score) {
    map.set(target1, (map.get(target1) || 0) + Math.abs(score - 4));
    map.set(target2, map.get(target2) || 0);
  }

  survey.forEach(([type1, type2], i) => {
    const score = choices[i];
    score < 4 ? SetScore(type1, type2, score) : SetScore(type2, type1, score);
  });

  return types
    .map(([type1, type2]) => (map.get(type1) < map.get(type2) ? type2 : type1))
    .join("");
}