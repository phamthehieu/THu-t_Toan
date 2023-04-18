//Tìm các phần tử chung trong 2 mảng

let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10]
let art = [7,8,10,11]
let att = []

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < art.length; j++) {
        if (arr[i] === art[j]) {
            att.push(arr[i])
        }
    }
}
console.log(att)