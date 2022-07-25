var x = 10 + Math.round(5 * Math.random());
var a = prompt("nhập số: ");
if (a == x) {
    alert("chúc mừng, bạn đã đoán đúng");
}
else if (a > x) {
    alert("Giá trị của bạn lớn hơn số bí mật");
}
else {
    alert("Giá trị của bạn nhỏ hơn số bí mật");
}