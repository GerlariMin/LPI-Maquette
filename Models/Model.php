<?php

/**
 * Class Model
 */
class Model
{

    private static $instance = null;

    /**
     * Model constructor.
     */
    private function __construct()
    {

        try {
            $this->bd = new PDO(DB, LOG, PSWD, OPTION);
        } catch (PDOException $e) {
            $erreur = 'Connexion échouée: ' . $e->getMessage();
            error_log($erreur);
        }

    }

    /**
     * @return Model|null
     */
    public static function get_model()
    {
        if (is_null(self::$instance)) {
            self::$instance = new Model();
        }
        return self::$instance;
    }

    /**
     * @param $nom
     * @param $prenom
     * @param $login
     * @param $password
     * @param $telephone
     * @param $mail
     * @param $adresse1
     * @param $adresse2
     * @return bool
     */
    public function add_user($nom, $prenom, $login, $password, $telephone, $mail, $adresse1, $adresse2)
    {
        $req = $this->bd->prepare("INSERT INTO users VALUES (null, :prenom, :nom, :login, :password, :telephone, :mail, :adresse1, :adresse2);");
        $req->bindValue(":prenom", $prenom, PDO::PARAM_STR_CHAR);
        $req->bindValue(":nom", $nom, PDO::PARAM_STR_CHAR);
        $req->bindValue(":login", $login, PDO::PARAM_STR_CHAR);
        $password = password_hash($password, PASSWORD_DEFAULT);
        $req->bindValue(":password", $password, PDO::PARAM_STR_CHAR);
        $req->bindValue(":telephone", $telephone, PDO::PARAM_INT);
        $req->bindValue(":mail", $mail, PDO::PARAM_STR_CHAR);
        $req->bindValue(":adresse1", $adresse1, PDO::PARAM_STR_CHAR);
        $req->bindValue(":adresse2", $adresse2, PDO::PARAM_STR_CHAR);

        return $req->execute();
    }

    /**
     * @param $login
     * @param $password
     * @return bool
     */
    public function verif_user($login, $password)
    {
        $req = $this->bd->prepare("SELECT passwordUser FROM users WHERE loginUser = :login OR mailUser = :login;");
        $req->bindValue(":login", $login, PDO::PARAM_STR_CHAR);
        $req->execute();
        $resultat = $req->fetch(FETCH_ASSOC);
        if (password_verify($password, $resultat['password'])) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param $login
     * @return mixed
     */
    public function get_one_user($login)
    {
        $req = $this->bd->prepare("SELECT idUser, nomUser, prenomUser, loginUser, telephoneUser, mailUser FROM users WHERE loginUser = :login;");
        $req->bindValue(":login", $login, PDO::PARAM_STR_CHAR);
        $req->execute();

        return $req->fetch(FETCH_ASSOC);
    }

    /**
     * @param $nom
     * @param $prenom
     * @param $login
     * @param $password
     * @param $telephone
     * @param $mail
     * @param $adresse1
     * @param $adresse2
     * @return bool
     */
    public function add_coiffeur($nom, $prenom, $login, $password, $telephone, $mail, $adresse1, $adresse2)
    {
        $req = $this->bd->prepare("INSERT INTO coiffeur VALUES (null, :prenom, :nom, :login, :password, :telephone, :mail, :adresse1, :adresse2);");
        $req->bindValue(":prenom", $prenom, PDO::PARAM_STR_CHAR);
        $req->bindValue(":nom", $nom, PDO::PARAM_STR_CHAR);
        $req->bindValue(":login", $login, PDO::PARAM_STR_CHAR);
        $password = password_hash($password, PASSWORD_DEFAULT);
        $req->bindValue(":password", $password, PDO::PARAM_STR_CHAR);
        $req->bindValue(":telephone", $telephone, PDO::PARAM_INT);
        $req->bindValue(":mail", $mail, PDO::PARAM_STR_CHAR);
        $req->bindValue(":adresse1", $adresse1, PDO::PARAM_STR_CHAR);
        $req->bindValue(":adresse2", $adresse2, PDO::PARAM_STR_CHAR);

        return $req->execute();
    }

    /**
     * @param $login
     * @param $password
     * @return bool
     */
    public function verif_coiffeur($login, $password)
    {
        $req = $this->bd->prepare("SELECT passwordCoiffeur FROM coiffeur WHERE loginCoiffeur = :login OR mailCoiffeur = :login;");
        $req->bindValue(":login", $login, PDO::PARAM_STR_CHAR);
        $req->execute();
        $resultat = $req->fetch(FETCH_ASSOC);
        if (password_verify($password, $resultat['password'])) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param $login
     * @return mixed
     */
    public function get_one_coiffeur($login)
    {
        $req = $this->bd->prepare("SELECT idCoiffeur, nomCoiffeur, prenomCoiffeur, loginCoiffeur, telephoneCoiffeur, mailCoiffeur FROM coiffeur WHERE loginCoiffeur = :login;");
        $req->bindValue(":login", $login, PDO::PARAM_STR_CHAR);
        $req->execute();

        return $req->fetch(FETCH_ASSOC);
    }

}

?>
