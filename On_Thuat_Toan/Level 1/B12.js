//Tính tổng các phần tử nằm ở vị trí lẻ

let arr = [1,2,3,4,5,6,7,8,9,10]
let a = 0

for (let i = 0; i <= arr.length; i++) {
    if (i % 2 !== 0) {
        a += arr[i]
    }
}
console.log(a)