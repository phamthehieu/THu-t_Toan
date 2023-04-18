//Viết hàm đệ quy tìm ước chung lớn nhất (UCLN) của hai số nguyên dương a và b.

const Try = (a, b) => {
    if (b === 0) {
        return a
    } else {
        return Try(b, a % b)
    }
}
console.log(Try(5,10))