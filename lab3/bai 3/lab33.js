var a, b, o;
a = Number(a);
b = Number(b);
function toan_hang(x) {
    if (o) {
        b = x;
    } else {
        a = x;
    }

}
function toan_tu(x) {
    o = x;

}
function thuc_hien() {
    switch (o) {

        case '+':
            var kq = a + b;
            alert("tổng:" + kq)
            break;
        case '-':
            var kq = a - b;
            alert("hiệu:" + kq)
            break;
        case 'x':
            var kq = a * b;
            alert("tích:" + kq)
            break;
        case ':':
            var kq = a / b;
            alert("thương:" + kq)
            break;

        default:
            alert(o + "không phải là toán tử ")
            break;
    }

    lam_lai();
}
function lam_lai() {
    a = undefined;
    b = undefined;
    c = undefined
}