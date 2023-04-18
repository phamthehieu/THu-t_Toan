//"- Viết chương trình nhập 1 số nguyên có 3 chữ số.
// Hãy in ra cách đọc của số nguyên này"

let arr = ['không', 'một', 'hai', 'ba', 'bốn', "năm", 'sáu', 'bảy', 'tám', 'chín']
const art = ["mười", "mươi"];
const att = ['một trăm', 'trăm']
let x = 223

let a = Math.floor(x / 100)
let b = Math.floor((x / 10) % 10)
let c = x % 10
if (a === 1) {
    if (b === 0 && c === 0) {
        console.log(att[0])
    } else if (b === 1 && c === 0) {
        console.log(att[0] + " " + art[0])
    } else {
        console.log(att[0] + ' ' + arr[b] + ' ' + art[1] + ' ' + arr[c])
    }
} else {
    console.log(arr[a] + ' ' + att[1] + ' ' + arr[b] + ' ' + art[1] + ' ' + arr[c])
}