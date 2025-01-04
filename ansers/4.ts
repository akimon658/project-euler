let max = 0

for (let i = 100; i <= 999; i++) {
  for (let j = i; j <= 999; j++) {
    const n = i * j
    const s = n.toString()
    let isPalindrome = true

    for (let l = 0, r = s.length - 1; l < r; [l, r] = [l + 1, r - 1]) {
      if (s.at(l) != s.at(r)) {
        isPalindrome = false
        break
      }
    }

    if (isPalindrome) {
      max = Math.max(max, n)
    }
  }
}

console.log(max)
