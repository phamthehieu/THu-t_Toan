// - Nhập một số nguyên dương n. Viết chương trình kiểm tra số n có phải là số hoàn hảo hay không?
//     Số hoàn hảo là số có tổng ước số của nó (không tính nó) bằng chính nó.
//     Ví dụ như Số 28 là số hoàn hảo vì ước chung lớn nhất của 28 (không tính số 28) gồm: 1; 2; 4; 7; 14."

let sum = 0
let x = 28
for (let i = 1; i <= x/2; i++) {
    if (x % i === 0) {
        sum += i
    }
}
if (sum === x) {
    console.log('Hoàn hảo')
} else {
    console.log('bẩn')
}
