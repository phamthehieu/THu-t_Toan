// - Hãy tính tổng các chữ số của số nguyên dương n

let sum = 0
while (x > 0) {
    sum += x % 10
    x = Math.floor(x/10)
}
console.log(sum)