//Tìm max thứ 2
let arr = [11, 2, 3, 4, 15, 10, 7, 8, 9, 10]
arr = Array.from(new Set(arr)).sort((a, b) => b - a);
console.log(arr[1])