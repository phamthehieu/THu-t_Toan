// Cho 2 số nguyên dương a và b. Hãy tìm ước chung lớn nhất của 2 số này.
let a = 24
let b = 36
while (b !== 0) {
    let x = a % b
    a = b
    b = x
}
console.log(a)