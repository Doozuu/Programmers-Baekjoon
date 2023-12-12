function solution(users, emoticons) {
  const discountRate = [10, 20, 30, 40];
  const cases = [];
  let result = [0, 0];

  function DFS(depth, arr) {
    if (depth === emoticons.length) return cases.push(arr);
    for (let i = 0; i < discountRate.length; i++) {
      DFS(depth + 1, arr.concat(discountRate[i]));
    }
  }
  DFS(0, []);

  cases.forEach((rate) => {
    let [emoticonPlus, sumPrice] = [0, 0];

    for (const user of users) {
      const [userRate, d] = user;
      const ratedPrices = emoticons.reduce((acc, curr, idx) => {
        if (rate[idx] >= userRate) return acc + curr * (1 - rate[idx] * 0.01);
        return acc;
      }, 0);

      if (ratedPrices >= d) emoticonPlus++;
      else sumPrice += ratedPrices;
    }

    if (emoticonPlus > result[0]) result = [emoticonPlus, sumPrice];
    else if (emoticonPlus === result[0] && sumPrice >= result[1])
      result = [emoticonPlus, sumPrice];
  });

  return result;
}
