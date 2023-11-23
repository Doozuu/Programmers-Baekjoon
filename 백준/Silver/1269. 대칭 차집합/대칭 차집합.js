const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

const mapA = new Map();
const mapB = new Map();

A.forEach((el) => mapA.set(el, 1));
B.forEach((el) => mapB.set(el, 1));

let differA = A.filter((el) => !mapB.get(el));
let differB = B.filter((el) => !mapA.get(el));

console.log(differA.length + differB.length);