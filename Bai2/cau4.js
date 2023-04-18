// "- Hãy đếm số lượng chữ số của số nguyên dương n

let x = 10
let count = 0
while (x > 0) {
    x = Math.floor(x/10)
    count ++
}
console.log(count)