function logToggle() {
    var button = document.getElementById("logInOutBtn")
    //SET TO ===, NOT =
    if (button.innerHTML === "In") {
        button.innerHTML = "Out";
    } else {
        button.innerHTML = "In";
    }
}