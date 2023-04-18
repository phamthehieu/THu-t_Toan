//Bánh đa nem

let x = 27

if (x < 9) {
    console.log('Số lần rán là 1')
} else {
    let i = Math.floor(x / 9)
    if (x - 9 * i === 0) {
        console.log(`Số lần rán là ${i}`)
    } else if (x - 9 * i >= 1 && x - 9 * i < 9) {
        console.log(`Số lần rán là ${i + 1}`)
    }
}

