// let a = 9;
// let b = 100;
// let list = []
// a= Math.ceil(Math.sqrt(a))
// b= Math.floor(Math.sqrt(b))
// for (let i = a; i <= Math.sqrt(b); i++) {
//    list.push(Math.pow(i,2))
// }
// console.log(list)
//
// let q = 2;
// let w = 0;
// for (let i = 0; i <= q; i++) {
//     w += i*(i+1)
// }
// console.log(w)
let j = 10;
let s = 100;
for (let i = 1; i <= j; i++) {
    s += i/(i*2)
}
console.log(s)
let o = 100;
if (Number.isInteger(o/2) === false) {
    console.log(o)
} else {
    while (Number.isInteger(o/2) === true) {
       o = o/2
        if (Number.isInteger(o/2) === false) {
            console.log(o)
            break;
        }
    }

}
let k = 99
if (Number.isInteger(k/2) === true) {
    console.log(k)
} else {
    console.log(k*2)
}