//Nhập và a, b. In ra các số chính phương từ a đến b

let x = 1
let y = 50

for (let i = x; i < y; i++) {
    if (Math.sqrt(i)%1 === 0) {
        console.log(i)
    }
}