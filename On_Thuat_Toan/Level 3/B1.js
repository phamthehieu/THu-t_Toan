//Nhập vào 3 cạnh tam giác, cho biết loại của tam giác đó
let x = 10
let y = 15
let z = 5

if (x === y && y === z) {
    console.log('là tam giác cân')
} else if (x === y || y === z || z === x) {
   if (x*x + y*y === z*z || x*x + z*z === y*y || y*y + z*z === x*x) {
       console.log('là tam giác vuông cân')
   } else {
       console.log('là tam giác cân')
   }
} else {
    if (x*x + y*y === z*z || x*x + z*z === y*y || y*y + z*z === x*x) {
        console.log('là tam giác vuông')
    } else if (x >= y+z || y >= z+x || z >= x+y) {
        console.log('không phải là tam giác')
    } else {
        console.log('là tam giác nhọn')
    }
}