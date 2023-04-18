// - Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25

let x = 100
let max = 0
for (let i = 0; i < x; i++) {
    if (x % i === 0 && i % 2 === 1) {
        if (i > max) {
            max = i
        }
    }
}
console.log(max)