//So sánh tổng phần tử có giá trị chẵn và lẻ của mảng

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let a = 0
let b = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        a += arr[i]
    } else {
        b += arr[i]
    }
}
if (a > b) {
    console.log('Chẵn nhiều hơn lẻ')
} else if (a < b) {
    console.log('Lẻ nhiều hơn chẵn')
} else {
    console.log('bằng nhau')
}