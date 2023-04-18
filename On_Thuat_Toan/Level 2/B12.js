//Tính tổng VỊ TRÍ của các phần tử chẵn

let arr = [1,2,3,4,5,6,7,8,9,10]
let a = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        a += i
    }
}
console.log(a)