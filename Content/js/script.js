$(document).ready(function() {

    //Dimensionnement du corps de la page en fonction de la taille du header et du footer
    var container = document.getElementById("container");
    var navbar = document.getElementById("navbar");
    var footer = document.getElementById("footer");
    container.width = window.innerWidth-4;
    container.height = window.innerHeight-container.offsetTop-footer.offsetHeight;

    //gestion du mode sombre ou clair après avoir cliquer sur le bouton
    /*$('#mode').on("click", function(){
        mode();
      }
    );

    mode();

    function mode(){
            var mode = "";
            var text = "";
            var bgcontainer = "";
            switch($('#mode').val()){
                case 'clair':
                    mode = "light";
                    bgcontainer = "light"
                    text = "dark";
                    break;
                case 'sombre':
                    mode = "dark";
                    bgcontainer = "secondary";
                    text = "light";
                    break;
                default:
                    mode = "light";
                    bgcontainer = "light"
                    text = "dark";
                    break;
            }
            document.getElementById('navbar').className="navbar navbar-"+mode+" bg-"+mode+" text-"+text;
            document.getElementById('container').className="bg-"+bgcontainer+" text-"+text;
            document.getElementById('footer').className="navbar navbar-"+mode+" bg-"+mode+" text-"+text;
            document.getElementById('mode').className="custom-select bg-"+mode+" text-"+text;
            //document.getElementById('theme').className="custom-select bg-"+mode+" text-"+text;
            //document.getElementById('couleurBalle').className="custom-select bg-"+mode+" text-"+text;
            document.getElementById('labelMode').className="input-group-text bg-"+mode+" text-"+text;
            //document.getElementById('labelTheme').className="input-group-text bg-"+mode+" text-"+text;
            //document.getElementById('labelCouleurBalle').className="input-group-text bg-"+mode+" text-"+text;
            document.getElementById('modalContent').className="modal-content bg-"+mode+" text-"+text;
            document.getElementById("openModal").className="btn btn-"+mode+" text-"+text;
            document.getElementById("reload").className="btn btn-"+mode+" text-"+text;
            document.getElementById("volume").className="btn btn-"+mode+" text-"+text;
            document.getElementById("helpOpenModal").className="btn btn-"+mode+" text-"+text;
            document.getElementById("helpModalContent").className="modal-content bg-"+mode+" text-"+text;
            $('body').css("background-color", mode);
            //document.style.backgroundColor = "#343a40";
        }*/
});
