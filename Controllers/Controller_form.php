<?php

class Controller_form extends Controller {

    public function action_default(){
        $this->action_form();
    }

    // affichage du formulaire
    public function action_form(){
        //on récupère l'obbjet m qui sera un model pour pouvour accéder à la bdd
        $m = Model::get_model();
        //récupération des pays de la base
        $liste_pays=$m->get_all_pays();
        $tab[] = $liste_pays;
        //récupération du dernier utilisateur enregistré
        $last = $m->last_users();

        if($last!= false){
            $tab[] = $last;
        }
        // affichage de la page en utilisant la fonction de la classe mère controller
        $this->render("form", $tab);
    }

    // traitement du formulaire après saisie
    public function action_envoi(){
        //si il existe bien le post du formulaire envoyé
        if(isset($_POST)){
            //si on a coché la case 'accepter les conditions d'utilisation'
            if(isset($_POST['condition']) && $_POST['condition']=="on"){
                //si on a vraiment choisi un pays et pas l'option par défaut
                if(isset($_POST['pays']) && $_POST['pays']!="Choisissez un pays"){
                    //si on a bien saisi le nom et prénom et pas seulemnt des espaces
                    if( (isset($_POST['prenom']) && trim($_POST['prenom'])!=""  ) && ( isset($_POST['nom']) && trim($_POST['nom'])!="" ) ){
                        $m = Model::get_model();
                        $add = $m->add_users($_POST['nom'], $_POST['prenom'], $_POST['pays']);
                        switch($add){
                            case false:
                                $this->action_error("Ajout dans la base impossible");
                                break;
                            default:
                                $this->render("home");
                                break;
                        }
                    } else {
                        // des informations sont manquantes sur le nom ou prenom
                        $this->action_error("Votre nom et/ou prénom n'a pas été saisi. Veuillez le ressaisir.");
                    }

                } else{
                    // Choisissez un pays
                    $this->action_error("Veuillez sélectionner un pays.");
                }

            } else{
                //veuillez acceptez les conditions d'utilisation
                $this->action_error("Vous n'avez pas accepter les conditions d'utilisation, nous ne pouvons donc pas vous enregistrer. Veuillez cocher la case");
            } 

        } else{
            //probleme lors de la saisie
            $this->action_error("Votre formulaire ne peut pas être traité. Veuillez le compléter une nouvelle fois.");
        }
    }
}

?>
