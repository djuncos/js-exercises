function changeColor(){

    document.body.style.backgroundColor = "green";
}







function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;

    document.body.style.backgroundColor = "blue";
    var t = setTimeout(startTime, 500);

    
    
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}



