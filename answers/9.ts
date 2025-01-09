for (let a = 1;; a++) {
  for (let b = a; b < 500; b++) {
    const c = Math.sqrt(a ** 2 + b ** 2)

    if (a + b + c === 1000) {
      console.log(a * b * c)
      Deno.exit()
    }
  }
}
