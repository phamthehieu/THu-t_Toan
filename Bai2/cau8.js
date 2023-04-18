// Cho 2 số nguyên dương a và b. Hãy tìm bội chung nhỏ nhất của 2 số này

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
console.log(lcm(24, 36))