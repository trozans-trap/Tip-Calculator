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

let billVal = document.getElementById("billVal").value;
let tipPerc = document.getElementById("tipPerc").value;
let peopleNum = document.getElementById("peopleNum").value;
let tipVal = document.getElementById("tipVal");
let totalPerPerson = document.getElementById("totalPerPerson");
let tipChange = (e)=>{
    console.log("hi",e);
    let x = document.getElementById("tip%").value;
    console.log(x);
}