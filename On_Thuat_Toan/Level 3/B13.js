//Tìm max mảng 2 chiều

let arr = [[22,3], [6,7,8], [9,10,11]]

let max = Math.max(...arr.flat());
console.log(max)
    
// let max2 = arr[0][0]
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > max2) {
//             max2 = arr[i][j]
//         }
//     }
// }
// console.log(max2)