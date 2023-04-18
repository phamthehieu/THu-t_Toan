// Viết hàm đệ quy sắp xếp một mảng các số nguyên theo thứ tự tăng dần hoặc giảm dần.


let arr = [1,3,5,4,8,9,2,6,10,7]

// arr.sort((a, b) => a - b)
//
// console.log(arr)
//
// arr.sort((a, b) => b - a)
//
// console.log(arr)
// function recursiveSortDescending(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const pivotIndex = Math.floor(arr.length / 2);
//     const pivot = arr[pivotIndex];
//     const less = [];
//     const greater = [];x`x`
//     for (let i = 0; i < arr.length; i++) {
//         if (i === pivotIndex) {
//             continue;
//         }
//         if (arr[i] > pivot) {
//             less.push(arr[i]);
//         } else {
//             greater.push(arr[i]);
//         }
//     }
//
//     return [
//         ...recursiveSortDescending(less),
//         pivot,
//         ...recursiveSortDescending(greater)
//     ];
// }
//
// console.log(recursiveSortDescending(arr))

// Hàm tạo mảng ngẫu nhiên không trùng lặp
function generateRandomArray(n) {
    const arr = [];
    for (let i = 1; i <= 100000; i++) {
        arr.push(i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, n * n);
}

// Hàm kiểm tra số nguyên tố
function isPrimeNumber(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Tạo ma trận ngẫu nhiên không trùng lặp và tìm số lượng số nguyên tố trong ma trận
function findPrimeNumbersInMatrix(n) {
    // Tạo ma trận ngẫu nhiên không trùng lặp
    const randomArray = generateRandomArray(n);
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = randomArray.slice(i * n, (i + 1) * n);
        matrix.push(row);
    }

    // Đếm số lượng số nguyên tố trong ma trận
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isPrimeNumber(matrix[i][j])) {
                count++;
            }
        }
    }

    return count;
}

// Sử dụng hàm để tìm số lượng số nguyên tố trong ma trận với n = 10
const n = 10;
const numberOfPrimes = findPrimeNumbersInMatrix(n);

console.log(`Số lượng số nguyên tố trong ma trận là: ${numberOfPrimes}`);