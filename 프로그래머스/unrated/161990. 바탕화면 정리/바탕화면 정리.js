function solution(wallpaper) {
        let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
        wallpaper.forEach((paper, i) => {
          if (paper.includes('#')) {
            x1 = Math.min(x1, i);
            y1 = Math.min(y1, paper.indexOf('#'));
            x2 = Math.max(x2, i);
            y2 = Math.max(y2, paper.lastIndexOf('#'));
          }
        });
        return [x1, y1, x2 + 1, y2 + 1];
}