//Viết hàm đệ quy tính giai thừa của một số nguyên dương n.

const Try = (a) => {
    if (a === 1) {
        return 1
    } else {
        return a * Try(a - 1)
    }
}
console.log(Try(5))

