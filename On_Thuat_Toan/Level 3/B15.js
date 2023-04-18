//Nhập vào mảng a, loại bỏ các phần tử trùng trong mảng

let arr = [1, 11, 7, 15, 10, 7, 9, 9, 10]
let art = []
for (let i = 0; i < arr.length; i++) {
    if (!art.includes(arr[i])) {
        art.push(arr[i])
    }
}
console.log(art)