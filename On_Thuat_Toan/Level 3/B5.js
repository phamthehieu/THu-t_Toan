//"Nhập vào n. Tính
// S = 100 +1/3 + 1/2 + 3/5 + … + n*(n + 1)/ (n+1)*(n + 2); "

let x = 5
let total = 100

for (let i = 1; i < 5; i++) {
    total += i * (i + 1) / ((i + 1) * (i + 2))
}
console.log(total)