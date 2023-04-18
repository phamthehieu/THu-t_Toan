//Viết hàm đệ quy tìm số lần xuất hiện của một số nguyên k trong một mảng các số nguyên.


const Try = (arr, b) => {
    if (arr.length === 0) {
        return 0
    }
    if (arr[0] === b) {
            arr.shift()
        return 1 + Try(arr, b)
    } else {
        arr.shift()
        return Try(arr, b)
    }
}

let arr = [1, 4, 3, 4, 5, 4, 7, 4, 9, 4, 4, 2, 4, 4, 6, 3, 4, 4]
let a = 4

console.log(Try(arr, a))