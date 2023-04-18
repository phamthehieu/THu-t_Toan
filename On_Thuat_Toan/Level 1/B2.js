//Vì thấy lớp Đại học của mình hơi trầm nên Yasuo quyết định tổ chức trò chơi cần ghép đôi cho các bạn cùng lớp. Yasuo học ở Giao Thông nên số lượng giữa trai và gái trong lớp không thể đều nhau được thậm chí là có thể lệch nhau khá nhiều.
//
// Vì vậy Yasuo muốn ghép đôi sao cho được nhiều cặp 1 nam 1 nữ nhất có thể. Nếu không được thì đồng giới đành phải ghép đôi với nhau.
//
// Yasuo là lớp trưởng nhưng tính toán rất chậm. Bạn hãy giúp Yasuo xem lớp của Yasuo sẽ ghép được mấy cặp "1 nam 1 nữ" và mấy cặp đồng giới.

let x = 2
let y = 3
let a,b
if (x <= y) {
    a = x
    b = Math.abs((y-x)/2)
} else {
    a = y
    b = Math.abs((x-y)/2)
}
console.log(Math.floor(a))
console.log(Math.floor(b))