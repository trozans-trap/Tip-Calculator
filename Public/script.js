// console.log("HI");
$(document).ready(function(){
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

let billVal = 0;
let tipPerc = 0;
let peopleNum = 0;
console.log(billVal);
console.log(tipPerc);
console.log(peopleNum);

let billValChange = ()=>{
    billVal = document.getElementById("billVal").value;
    document.getElementById("tipVal").innerHTML = billVal*tipPerc/peopleNum;
    document.getElementById("totalPerPerson").innerHTML = billVal/peopleNum +billVal*tipPerc/peopleNum;
}

let tipChange = ()=>{
    tipPerc = document.getElementById("tipPerc").value;
    document.getElementById("tipVal").innerHTML = billVal*tipPerc/100;
    document.getElementById("totalPerPerson").innerHTML = Math.round(((billVal/peopleNum) +(billVal*tipPerc)/100)*100)/100;
}

let peopleNumChange = ()=>{
    peopleNum = document.getElementById("peopleNum").value;
    document.getElementById("tipVal").innerHTML = billVal*tipPerc/100;
    document.getElementById("totalPerPerson").innerHTML = Math.round(((billVal/peopleNum) +(billVal*tipPerc)/100)*100)/100;
}
    