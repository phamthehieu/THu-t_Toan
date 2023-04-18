//Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không

let arr = [11, 2, 3, 4, 15, 10, 7, 8, 9, 10]
let art = [2,3,4,12]
let count = 0

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < art.length; j++) {
        if (arr[i] === art[j]) {
            count ++
        }
    }
}

if (count === art.length) {
    console.log('có')
} else {
    console.log('không')
}