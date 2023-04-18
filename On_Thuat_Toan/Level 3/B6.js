//"- Cho 2 số nguyên dương a và b. Hãy tìm ước chung lớn nhất của 2 số này.
// - Cho 2 số nguyên dương a và b. Hãy tìm bội chung nhỏ nhất của 2 số này

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(24, 36))

function acd(a, b) {
    let gcd = function(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    return (a * b) / gcd(a, b);
}
console.log(acd(24, 36))