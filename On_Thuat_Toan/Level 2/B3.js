//"Nhập vào a, b. In từ a đến b:
// - chia hết cho 3 in 'Fizz'
// - chia hết cho 5 in 'Buzz'
// - chia hết cho 3 và 5 in 'FizzBuzz'"

let x = 1
let y = 100

for (let i = x; i < y; i++) {
    if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else {
        console.log(i)
    }
}