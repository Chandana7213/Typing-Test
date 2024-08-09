var gross_data = sessionStorage.getItem("gross")
var net_data = sessionStorage.getItem("net")
var acc_data = sessionStorage.getItem("acc")
document.getElementById("gross").innerText = gross_data
document.getElementById("net").innerText = net_data
document.getElementById("accuracy").innerText = acc_data + "%"

function restart(){
    window.location.href="index.html"
}
