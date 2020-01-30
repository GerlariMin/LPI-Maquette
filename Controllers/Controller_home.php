<?php

class Controller_home extends Controller {

    public function action_default(){
      $this->action_home();
    }

    public function action_home(){
      $this->render("home");
    }

    public function action_liste(){
      $m = Model::get_model();
      $liste=$m->get_liste();
      $this->render("liste", $liste);
    }
}

?>
