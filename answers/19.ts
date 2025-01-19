let mod = 1
let count = 0

for (let year = 1900; year <= 2000; year++) {
  const is_leap_year = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

  for (let month = 1; month <= 12; month++) {
    if (mod === 0 && year > 1900) {
      count++
    }

    let days

    switch (month) {
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30

        break

      case 2:
        days = is_leap_year ? 29 : 28
        break

      default:
        days = 31
    }

    mod = (mod + days) % 7
  }
}

console.log(count)
