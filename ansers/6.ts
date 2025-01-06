const productOfSum = (50 * 101) ** 2
let sumOfProduct = 0

for (let i = 1; i <= 100; i++) {
  sumOfProduct += i * i
}

console.log(productOfSum - sumOfProduct)
