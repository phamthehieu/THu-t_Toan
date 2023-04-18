//"Tìm ước số nguyên lẻ lớn nhất của a
// Liệt kê bội chẵn số kẻ nhỏ nhất của a"

let x = 10
let y = 0
let z = 0

for (let i = 1; i <= x; i++) {
    if (x % i === 0 && i % 2 !== 0) {
        if (z < i) {
            y = i
        }

    }
}
console.log(y)

z = x*2
console.log(z)


