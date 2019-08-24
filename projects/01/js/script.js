menu.onclick = function myFunction() { //По нажатию на элемент с id="menu"
    var x = document.getElementById("myTopnav");z

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}