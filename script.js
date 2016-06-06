// Modal window popup for diseases//
var modal = document.getElementById('diseaseModal');

var btn = document.getElementById("diseaseButton");

var span = document.getElementsByClassName("closeDisease")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//
