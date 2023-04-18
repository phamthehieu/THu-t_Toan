let x = 3
let arr = [2,3,3]
let total = 0
let dem1 = 0
let dem3 = 0

for (let i = 0; i < arr.length; i++) {
    total += arr[i]
    if (arr[i] === 1) {
        dem1 +=1
    }
    if (arr[i] === 3) {
        dem3 += 1
    }
}

if (dem3 > dem1) {
    total = total - (dem3 - dem1) * 3
    if (total % 4 === 0) {
        console.log(total / 4 + dem3 - dem1)
    } else {
        console.log(Math.floor(total / 4) + 1 + dem3 - dem1)
    }
} else {
    if (total % 4 === 0) {
        console.log(total/4)
    } else {
        console.log(Math.floor(total/4) + 1)
    }
}
