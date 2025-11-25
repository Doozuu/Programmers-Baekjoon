const fs = require("fs");
const input = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((v) => v.split(" "));
const [N, M] = input[0].map((n) => Number(n));
const map = input.splice(1).map((v) => v.map((v) => Number(v)));
let sums = [];
 
function dfs(y, x, prevDirection, sum) {
	let directionX = [-1, 0, 1];
 
	if (x === -1 || x === M) return 0;
	sum += map[y][x];
	if (y === N - 1) return sums.push(sum);
	for (let i = 0; i < 3; i++) {
		if (prevDirection != directionX[i])
			dfs(y + 1, x + directionX[i], directionX[i], sum);
	}
}
 
for (let col = 0; col < M; col++) {
	dfs(0, col, -2, 0);
}
 
console.log(Math.min(...sums));