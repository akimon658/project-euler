const n = 20
let patterns = Array(n + 1).fill(1)

for (let i = 1; i < n; i++) {
  let sum = 0
  const patterns2 = Array(n + 1)

  for (let j = 0; j < n + 1; j++) {
    patterns2[j] = patterns[j] + sum
    sum += patterns[j]
  }

  patterns = patterns2
}

console.log(patterns.reduce((sum, elem) => sum + elem))
