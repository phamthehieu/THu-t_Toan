//Viết hàm đệ quy tính lũy thừa bậc n của một số nguyên x.

const Try = (a, b) => {
    if (b === 0) {
        return 1
    } else if (b % 2 === 0) {
        const c = Try(a, b / 2)     
        return c * c
    } else {
        const c = Try(a, Math.floor(b / 2))
        return a * c * c
    }
}
Try(2,4)