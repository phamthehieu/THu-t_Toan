//Tìm tất cả các cặp phần tử trong một mảng có tổng bằng một giá trị cho trước.

let arr = [1, 2, 3, 9, 4, 5, 6, 7, 8, 10]
let a = 9
arr.sort((a, b) => a - b)
let art = []
let b = 0
let c = arr.length - 1
while (b < c) {
    let total = arr[b] + arr[c]
    if (total === a) {
        art.push([arr[b],arr[c]])
        b ++
        c--
    } else if (total > a) {
        c --
    } else {
        b ++
    }
}
console.log(art)