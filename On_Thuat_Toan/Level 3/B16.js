//Kiểm tra xem một mảng có chứa tất cả các số từ 1 đến n không.

const arr = [1, 3, 5, 2, 4, 7, 8, 9, 6];
let a = 5
let count = 0

for (let i = 0; i <= a; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i === arr[j]) {
            count ++
        }
    }
}
if (count === a) {
    console.log('Có')
} else {
    console.log('Không')
}

