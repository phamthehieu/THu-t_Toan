// "- Liệt kê tất cả các “ước số” của số nguyên dương n


// let x =100
// for (let i = 0; i <= x; i++) {
//     if (x % i === 0) {
//         console.log(i)
//     }
// }

// let x = [1,2,3,4,5,6,7]
// let g = x.reduce((a,b) => {
//   return a * b
// })

let x = 27
if (x <= 1 && x <= 9) {
  console.log('1 lan')
} else if (x > 9) {
  let i = x/9;
  if (x-9*i === 0) {
    i = Math.ceil(i)
    console.log(`${i} lan a`)
  }
  if (x-9*i >= 1 && x-9*i < 9) {
    i = Math.ceil(i)
    console.log(`${i} lan`, i+1)
  }
}