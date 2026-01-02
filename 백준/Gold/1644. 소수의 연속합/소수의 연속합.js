const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input[0];
let answer = 0;
let right = 0;
let sum = 0;

function getPrimes(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) primes.push(i);
  }

  return primes;
}

const primes = getPrimes(N);
  
for(let left=0;left<primes.length;left++){
  while(sum < N && right < primes.length){
    sum += primes[right];
    right++;
  }

  if(sum < N) break;

  if(sum === N) answer++
  sum -= primes[left]
}

console.log(answer);