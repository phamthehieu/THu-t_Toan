//Nhập vào a, b. Tính tổng các số chẵn từ a -> b

let x = 1
let y = 10
let total = 0

for (let i = x; i < y; i++) {
    if (i % 2 === 0) {
        total += i
    }
}
console.log(total)
