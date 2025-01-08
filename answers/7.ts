const isPrime = Array(10 ** 6).fill(true)
let count = 0

for (let i = 2; i < 10 ** 6; i++) {
  if (isPrime.at(i)) {
    count++

    if (count === 10001) {
      console.log(i)
      Deno.exit()
    }

    for (let j = i * 2; j < 10 ** 6; j += i) {
      isPrime[j] = false
    }
  }
}
