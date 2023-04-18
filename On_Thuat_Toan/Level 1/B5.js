//Nhập vào n. Tính S = 1.2 + 2.3 + 3.4 + ... + n(n+1).

let x = 5
let total = 0
for (let i = 1; i <= x; i++) {
    total += i * (i+1)
}
console.log(total)