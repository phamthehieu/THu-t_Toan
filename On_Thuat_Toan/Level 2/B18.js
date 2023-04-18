//Sắp xếp một mảng chứa các số nguyên sao cho các số chẵn đứng trước các số lẻ.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let i = 0;
let j = arr.length - 1;
while (i < j) {
    if (arr[i] % 2 === 0) {
        i++;
    } else {
        while (arr[j] % 2 === 1 && i < j) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

console.log(arr)

