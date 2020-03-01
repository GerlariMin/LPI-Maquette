<?php

/**
 * Class Controller_authentification
 */
class Controller_authentification extends Controller {

    /**
     *
     */
    public function action_default(){
        $this->action_authentification();
    }

    /**
     *
     */
    public function action_authentification(){
        $this->render("home");
    }

    /**
     *
     */
    public function action_connexion_coiffeur(){
        $this->render("connexion_coiffeur");
    }

    /**
     *
     */
    public function action_connexion_client(){
        $this->render("connexion_client");
    }

    /**
     *
     */
    public function action_inscription_coiffeur(){
        $this->render("inscription_coiffeur");
    }

    /**
     *
     */
    public function action_inscription_client(){
        $this->render("inscription_client");
    }
}

?>