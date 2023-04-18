//Viết hàm đệ quy tính tổng các số từ 1 đến n.

const Try = (a) => {
    if (a <= 0) {
        return 0
    } else {
        return a + Try(a - 1)
    }
}

console.log(Try(5))