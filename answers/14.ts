let max = 0
let answer = 0

for (let start = 1; start < 1000000; start++) {
  let n = start
  let count = 1

  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2
    } else {
      n = 3 * n + 1
    }
    count++
  }

  if (count > max) {
    max = count
    answer = start
  }
}

console.log(answer)
