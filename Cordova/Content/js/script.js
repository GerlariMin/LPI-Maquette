$(document).ready(function () {

    //Dimensionnement du corps de la page en fonction de la taille du header et du footer
    var container = document.getElementById("container");
    var navbar = document.getElementById("navbar");
    var footer = document.getElementById("footer");
    var card = document.getElementById("card-container");
    container.width = window.innerWidth - 4;
    container.height = window.innerHeight - navbar.offsetHeight - footer.offsetHeight;
    if (card) {
        card.width = (container.width / 2);
        card.height = container.height;
        console.log("card-container: " + card.offsetWidth + " " + card.offsetHeight);
    }
    console.log("container: " + container.width + " " + container.height);
    console.log("navbar: " + navbar.offsetWidth + " " + navbar.offsetHeight);
    console.log("footer: " + footer.offsetWidth + " " + footer.offsetHeight);

});
