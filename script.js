document.getElementById("desc-1").style.display = "none";
document.getElementById("desc-2").style.display = "none";
function description(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

