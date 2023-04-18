//In ra các phần tử trong mảng mà phần tử đó lớn hơn giá trị phần tử trước đó

let arr = [1,2,1,1,5,1,2,1,9,1]

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
        console.log(arr[i])
    }
}