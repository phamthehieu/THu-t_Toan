//Viết hàm đệ quy tìm số chữ số của một số nguyên dương n.

const Try = (a) => {
    if (a < 10) {
        return 1
    }
    return 1 + Try(Math.floor(a / 10))
}

console.log(Try(12345))