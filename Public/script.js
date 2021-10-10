setTimeout(()=>{ 
    document.getElementById("loader").innerHTML=""; 
    document.getElementById("content").style.display="block"
}, 4000);
// var currencies = '<%- JSON.stringify(curr) %>';
// for(itr in currencies){
    // console.log(JSON.parse(currencies));
// }
let decr = (flag,id)=>{
    let val = document.getElementById(id).value;
    if(val<=0 || (flag==0 && parseInt(val)-50<0)){
        alert("Can't be in Negative .");
        return false;
    }
    if(flag==0)document.getElementById(id).value=parseInt(val)-50;
    else document.getElementById(id).value=parseInt(val)-1;
    billValChange();
}

let incr = (flag,id)=>{
    let val = document.getElementById(id).value;
    if(val>=100 && flag==1){
        alert("Tip Percentage can't be more than 100 %");
        return false;
    }
    if(flag==0)document.getElementById(id).value=parseInt(val)+50;
    else document.getElementById(id).value=parseInt(val) + 1;
    billValChange();
};

let billVal = 0;
let tipPerc = 0;
let peopleNum = 0;
let si = [
    {v: 1E3, s: "K"},
    {v: 1E6, s: "M"},
    {v: 1E9, s: "B"},
    {v: 1E12, s: "T"},
    {v: 1E15, s: "P"},
    {v: 1E18, s: "E"}
];

let convertBig = (num)=>{
    num = num.toString().replace(/[^0-9.]/g, '');
    let i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].v) {
            break;
        }
    }
    return (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].s;
}

let billValChange = ()=>{
    billVal = document.getElementById("billVal").value;
    tipPerc = document.getElementById("tipPerc").value;
    peopleNum = document.getElementById("peopleNum").value;
    if(tipPerc<0 || tipPerc>100){
        alert("Invalid Tip Percentage");
        return;
    }
    if(peopleNum<0){
        alert("Number Of People Cant't be in negative");
        return;
    }
    let tipVal = 0,totalPerPerson=0;
    if(peopleNum>0){
        tipVal = Math.round(((billVal*tipPerc)/100)*100)/100;
        totalPerPerson = Math.round(((billVal/peopleNum) +(billVal*tipPerc)/100)*100)/100;
    }
    if(tipVal>1000)tipVal=convertBig(tipVal);
    if(totalPerPerson>1000)totalPerPerson=convertBig(totalPerPerson);
    document.getElementById("tipVal").innerHTML = tipVal;
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson;
}


    