// include script tag in HTML
// JS components:

// 1.LogIn/LogOut toggler
function logToggle() {
    var button = document.getElementById("logInOutBtn")
    //SET TO ===, NOT =
    if (button.innerHTML === "In") {
        button.innerHTML = "Out";
    } else {
        button.innerHTML = "In";
    }
}

// 2.Remove "Add definition" onclick
function removeBtn () {
    var button = document.getElementById("AddDefBtn");
    button.remove();
}

// 3.AlertBox likeBtn onclick
function likeAlert () {
    alert("Ninja was liked")
}