//Nhập a,b,c (có thể trùng, khác 0). In ra các số 3 chữ số có thể tạo ra từ a,b,c

let arr = ["2","2","1"]
let art = []
let a = ''
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            a+= arr[i] + arr[j] + arr[k]
            art.push(a)
            a = ''
        }
    }
}
let result = art.filter((value, index, array) => array.indexOf(value) === index);

console.log(result)