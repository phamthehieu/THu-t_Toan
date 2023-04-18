//Tính trung bình các phần tử

let arr = [11, 2, 3, 4, 15, 10, 7, 8, 9, 10]
let total = 0
let tb = 0

for (let i = 0; i < arr.length; i++) {
    total += arr[i]
}

tb = total / arr.length

console.log(tb)