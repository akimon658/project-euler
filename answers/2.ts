let sum = 0
let current = 1
let previous = 0

while (current < 4000000) {
  ;[current, previous] = [current + previous, current]

  if (current % 2 == 0) {
    sum += current
  }
}

console.log(sum)
