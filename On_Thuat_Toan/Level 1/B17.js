//Tìm hai số trong một mảng có tích lớn nhất

let arr = [1, 2, 3, -9, 4, 5, 6, 7, 8, -10]
let max = 0
let a = []

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i]*arr[j] > max) {
            max = arr[i]*arr[j]
            a.push(arr[i])
            a.push(arr[j])
        }
    }
}
console.log(a[a.length-2],a[a.length-1])