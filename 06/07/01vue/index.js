var cal = require("./1.js")
    // require('./index.css')
require('./mui/dist/css/mui.css')
var btn = document.getElementById("btn");

btn.onclick = function() {
    alert(1)
    var n1 = document.getElementById("n1").value - 0;
    var n2 = document.getElementById("n2").value - 0;
    var sum = cal.add(n1, n2)
    n3.value = sum

}