//Nhập a,b,c (không trùng, khác 0). In ra các số 3 chữ số có thể tạo ra từ a,b,c

let arr = [3, 2, 1];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            console.log(arr[i], arr[j], arr[k])
        }
    }
}