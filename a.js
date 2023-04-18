//Cho một mảng 2 chiều A[n][n]. Hãy thực hiện yêu cầu sau:
// Khởi tạo mảng với n là 10. Các phần tử đều là các số ngẫu nhiên nằm trong khoảng từ 1 tới 100000 và không được trùng nhau.
// Tìm vị trí tất cả các số nguyên tố trong mảng (chia hết cho 1 và chính nó).

let a = []
let subArr = []
let n = 10

for (let i = 0; i < n; i++) {
    while (subArr.length < n) {
        let r = Math.floor(Math.random()*10000) + 1
        if (a.flat().indexOf(r) === -1 && subArr.indexOf(r) === -1) subArr.push(r)
        if (subArr.length === n) a.push(subArr)
    }
    subArr = []
}
console.log(a)

//Tìm tất cả các số nguyên tố trong mảng a
let primeNumber = [...a].flat()
let flag = true
for (let i = 0; i < primeNumber.length; i++) {
    flag = true
    if (primeNumber[i] < 2) flag = false
    for (let j = 2; j < Math.sqrt(primeNumber[i]); j++) {
        if (primeNumber[i] % j === 0) {
            flag = true
        }
    }
    if (flag === true) console.log(primeNumber[i])
}
