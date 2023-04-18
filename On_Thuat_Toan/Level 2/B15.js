//In ra các phần tử chỉ xuất hiện 1 lần

let arr = [1, 11, 7, 15, 10, 7, 9, 9, 10]
let count = 0

for (let i = 0; i < arr.length; i++) {
    count = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count ++
        }
    }
    if (count === 1) {
        console.log(arr[i])
    }
}