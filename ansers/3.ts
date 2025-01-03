let n = 600851475143
const sqrtN = Math.floor(Math.sqrt(n))
const isPrime = new Array(sqrtN + 1).fill(true)
let ans = 1

for (let i = 2; i <= sqrtN; i++) {
  if (isPrime[i]) {
    for (let j = 2 * i; j <= sqrtN; j += i) {
      isPrime[j] = false
    }

    while (n % i == 0) {
      n /= i
      ans = i
    }
  }
}

if (n !== 1) {
  ans = n
}

console.log(ans)
