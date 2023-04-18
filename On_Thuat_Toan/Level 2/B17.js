//Tìm dãy con liên tiếp có tổng lớn nhất trong một mảng.

let arr = [1, 2, 3, -9, 4, 5, 6, 7, 8, -10]

function findMaxSubarray(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (maxEndingHere + arr[i] < arr[i]) {
            tempStart = i;
            maxEndingHere = arr[i];
        } else {
            maxEndingHere += arr[i];
        }

        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }

    return {
        sum: maxSoFar,
        subarray: arr.slice(start, end + 1),
    };
}

let a = findMaxSubarray(arr)
console.log(a)