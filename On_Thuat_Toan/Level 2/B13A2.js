//Tổng các phần tử chia hết cho 3

let arr = [11, 2, 3, 4, 15, 10, 7, 8, 9, 10]
let a = 0

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 3 === 0) {
        a += arr[i]
    }
}
console.log(a)