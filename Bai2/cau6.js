// - Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không"
const cau6 = (n) => {
    let str = n.toString();
    for (let i = 1; i < str.length; i++) {
        if (parseInt(str[i]) < parseInt(str[i - 1])) {
            return false;
        }
    }
    return true;
}
console.log(cau6(1234526))