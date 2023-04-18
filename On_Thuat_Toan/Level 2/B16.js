//Tìm dãy con liên tiếp tăng dần dài nhất trong mảng

function findLongestIncreasingSubarray(arr) {
    let maxLen = 1;
    let currentLen = 1;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            currentLen++;
            if (currentLen > maxLen) {
                maxLen = currentLen;
                startIndex = i - maxLen + 1;
                endIndex = i;
            }
        } else {
            currentLen = 1;
        }
    }

    return arr.slice(startIndex, endIndex+1);
}
const arr = [1, 3, 5, 2, 4, 7, 8, 9, 6];
const longestSubarray = findLongestIncreasingSubarray(arr);
console.log(longestSubarray);