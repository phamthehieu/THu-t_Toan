//- Nhập 2 số nguyên x và y. Viết chương trình tính tổng bình phương các số từ x đến y.

let x = 1
let y = 10
let total = 0
for (let i = x; i < 10; i++) {
    total += i**2
}
console.log(total)