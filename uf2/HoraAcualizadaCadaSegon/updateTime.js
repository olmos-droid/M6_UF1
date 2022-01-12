function updateDateTime(){
    let time_mms = 1000;
    myTime = setTimeout('showDate()',time_mms );
}
function showDate(){
    var x = new Date();
    document.getElementById("datetime").innerHTML=x
    updateDateTime();
}