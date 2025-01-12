let triangle_number = 1

for (let i = 2;; i++) {
  triangle_number += i

  let divisors = 0

  for (let j = 2; j <= triangle_number; j++) {
    if (triangle_number % j === 0) {
      divisors++
    }
  }

  if (divisors > 500) {
    console.log(triangle_number)

    break
  }
}
