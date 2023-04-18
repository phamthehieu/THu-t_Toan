//Tổng 3 số nguyên

let N = 2
let S = 2
let H = []
for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= S - i ; j++) {
        let k = S - i - j
       H.push(`${i},${j},${k}`)
    }
}
console.log(H.length)