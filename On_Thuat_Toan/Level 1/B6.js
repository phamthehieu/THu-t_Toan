//"Liệt kê các ước số nguyên dương của a
// Liệt kê các bội số nhỏ hơn 100 của a"

let a = 10
let art = []
let arr = []

for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
        art.push(i)
    }
}
for (let i = 1; i < 100; i++) {
    if (i % a === 0) {
        arr.push(i)
    }
}
console.log(art, arr)