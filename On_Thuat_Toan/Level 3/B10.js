//Nhập a,b,c (có thể trùng, có thể bằng 0). In ra các số 3 chữ số có thể tạo ra từ a,b,c

let arr = ['2','2','0']
let att = []
let a = ''
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i] !== '0') {
                a+= arr[i] + arr[j] + arr[k]
                att.push(a)
            }
            a = ''
        }
    }
}
let result = att.filter((value, index, array) => array.indexOf(value) === index);

console.log(result)
