//Kiểm tra mảng có tăng dần hay không

let arr = [1, 2, 3, 4, 5]
let flag = true
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
        flag = false
    }
}

if (flag === true) {
    console.log("Mảng tăng dần");
} else {
    console.log("Mảng không tăng dần");
}