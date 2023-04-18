//"- Viết chương trình nhập 1 số nguyên có 2 chữ số.
// Hãy in ra cách đọc của số nguyên này"

let arr = ['không', 'một', 'hai', 'ba', 'bốn', "năm", 'sáu', 'bảy', 'tám', 'chín']
const tensNames = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
let x = 67

let y = x / 10
let z = x % 10
let g = Math.floor(y)
if (g === 1 ) {
    if (z === 0) {
        console.log(tensNames[1])
    } else {
        console.log(tensNames[1] +"-"+ arr[z])
    }
} else {
    console.log(tensNames[g] +"-"+ arr[z])
}

