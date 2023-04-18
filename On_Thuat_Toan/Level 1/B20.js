//Viết hàm đệ quy tìm số Fibonacci thứ n.

const Try = (a) => {
    if (a < 2) {
        return a
    } else {
        return Try(a - 1) + Try(a - 2)
    }
}

let v = Try(5)

console.log(v)