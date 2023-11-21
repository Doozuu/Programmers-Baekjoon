const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const N = +input[0];
const cards = input[1].split(' ').map(Number);
const M = +input[2];
const checkList = input[3].split(' ').map(Number);

const map = new Map();
let answer = [];

cards.map((el) => map.set(el, 1));
answer = checkList.map((el) => (!map.get(el) ? 0 : 1));

console.log(answer.join(' '));
