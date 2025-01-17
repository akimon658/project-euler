const num1: Record<string, string> = {
  "0": "",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
}
const num2: Record<string, string> = {
  "10": "ten",
  "11": "eleven",
  "12": "twelve",
  "13": "thirteen",
  "14": "fourteen",
  "15": "fifteen",
  "16": "sixteen",
  "17": "seventeen",
  "18": "eighteen",
  "19": "nineteen",
}
const num3: Record<string, string> = {
  "2": "twenty",
  "3": "thirty",
  "4": "forty",
  "5": "fifty",
  "6": "sixty",
  "7": "seventy",
  "8": "eighty",
  "9": "ninety",
}

let count = 0

for (let i = 1; i < 1000; i++) {
  let n = i
  const d1 = Math.floor(n / 100)

  n %= 100

  let s = ""

  if (d1 > 0) {
    s += num1[d1.toString()] + "hundred"

    if (n !== 0) {
      s += "and"
    }
  }

  const d2 = Math.floor(n / 10)

  if (d2 == 1) {
    s += num2[n.toString()]
  } else {
    if (d2 > 1) {
      s += num3[d2.toString()]
    }

    n %= 10
    s += num1[n.toString()]
  }

  count += s.length
}

count += "onethousand".length

console.log(count)
