//Nhập vào n. Tính S = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2;

let x = 5
let total = 0
for (let i = 1; i <= x; i++) {
    total += (2 * i - 1)/(2 * i)
}
console.log(total)