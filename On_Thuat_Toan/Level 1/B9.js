//"- Cần có tổng 20000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng.
// Lập chương trình để tìm ra tất cả các phương án có thể"

let x = 20000
for (let i = 0; i <= Math.floor(x / 5000); i++) {
    for (let j = 0; j <= Math.floor((x - i * 5000)/2000); j++) {
        let k = (x - i * 5000 - j * 2000) / 1000
        console.log(`Số tiền ${x} cần ${i} tờ 5000, ${j} tờ 2000, ${k} tờ 1000`)
    }
}
