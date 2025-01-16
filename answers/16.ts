const s = (2n ** 1000n).toString()

console.log(s.split("").map((c) => Number(c)).reduce((sum, elem) => sum + elem))
