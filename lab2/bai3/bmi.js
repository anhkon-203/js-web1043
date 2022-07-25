var kg = prompt("nhập cân nặng: ");
var m = prompt("nhập chiều cao(m) :");
bmi = (kg)/(m*m)

if(bmi<18.5){
    alert("thiếu cân")
    } 
    else if(bmi >=18.5 && bmi<25)
    {
        alert("bình thường")
    } 
    else if(bmi>=25 && bmi<30)
    {
        alert("thừa cân")
    }
    else
    {
        alert("béo phì")
    }