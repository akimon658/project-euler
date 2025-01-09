const n = 2 * 10 ** 6
const isPrime = Array(n).fill(true)
let sum = 0

for (let i = 2; i < n; i++) {
  if (isPrime.at(i)) {
    sum += i

    for (let j = i * 2; j < n; j += i) {
      isPrime[j] = false
    }
  }
}

console.log(sum)
