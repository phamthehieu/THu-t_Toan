//Kiểm tra chuỗi đối xứng

function Try(str) {
    console.log(str)
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return Try(str.slice(1, str.length - 1));
    }
    return false;
}

console.log(Try("racecar"));
console.log(Try("hello"));
    