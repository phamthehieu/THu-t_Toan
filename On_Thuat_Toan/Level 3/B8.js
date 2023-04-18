//Tuổi trong ngày

let x = 400
let a = Math.floor(x / 365)
let b = Math.floor((x - (365 * a)) / 30)
let c = x - a * 365 - b * 30
console.log(a,b,c)