//"- Cần có tổng 200000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng.
// Lập chương trình để tìm ra phương án ít số lượng tiền nhất"

let x = 212000

let y = Math.floor(x / 5000)
let a = x % 5000
let z = Math.floor(a / 2000)
a %= 2000
let g = Math.floor(a / 1000)

console.log(`Số tờ 5000 = ${y} - Số tờ 2000 = ${z} - Số tờ 1000 = ${g}`)
