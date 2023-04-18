// Đếm số lần xuất hiện của các phần tử trong mảng

let arr = [11, 11, 7, 15, 10, 7, 9, 9, 10]

    const freq = {};
for (let i = 0; i < arr.length; i++) {
    let a = arr[i]
    if (freq[a]) {
        freq[a]++
    } else {
        freq[a] = 1
    }
}
console.log(freq)