//liệt kê các vị trí mà giá trị tại đó là giá trị âm

let arr = [-1,2,3,4,5,6,-7,8,9,-10]

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
        console.log(i)
    }
}