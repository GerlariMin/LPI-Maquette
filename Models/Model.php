<?php

class Model {

    private static $instance = null;

    private function __construct(){

      try{
        $this->bd = new PDO('mysql:host=localhost;dbname=maquette','root','');
      }catch(PDOException $e){
        $erreur = 'Connexion échouée: '. $e->getMessage();
        error_log($erreur);
      }

    }

    public static function get_model(){

        if(is_null(self::$instance)){
            self::$instance = new Model();
        }
        return self::$instance;
    }

    public function add_user($nom, $prenom, $login, $password, $telephone, $mail, $adresse1, $adresse2){
      $req = $this->bd->prepare("INSERT INTO users VALUES (null, :prenom, :nom, :login, :password, :telephone, :mail, :adresse1, :adresse2);");
      $req->bindValue(":prenom", $prenom);
      $req->bindValue(":nom", $nom);
      $req->bindValue(":login", $pays);
      $req->bindValue(":password", $pays);
      $req->bindValue(":telephone", $pays);
      $req->bindValue(":mail", $pays);
      $req->bindValue(":adresse1", $pays);
      $req->bindValue(":adresse2", $pays);

      $retour = $req->execute();
      return $retour;
    }

    public function verif_user($login, $password){
      $req = $this->bd->prepare("SELECT login, mail, password FROM users WHERE loginUser = :login OR mailUser = :login;");
      $req->bindValue(":login", $login);

      $resultat = $req->execute();
      if($resultat){

      }
    }

}

?>
