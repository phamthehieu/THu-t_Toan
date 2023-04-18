// Viết chương trình nhập giá trị x sau tính giá trị của hàm số
// f(x) = 2x^2 + 5x + 9 khi x >= 5, f(x) = c khi x < 5"

x = 6
let y
if (x >= 5) {
    y = 2 * x * x + 5 * x + 9;
} else {
    y = -2 * x * x + 4 * x - 9;
}
console.log(y)