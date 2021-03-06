<?php

	require_once("Utils/functions.php"); //Pour avoir la fonction e()
    require_once("config/config_bdd.php");
	require_once("Models/Model.php"); //Inclusion du modèle
	require_once("Controllers/Controller.php"); //Inclusion de la classe Controller

	$controllers = ['home', 'form', 'authentification']; //Liste des contrôleurs
	$controller_default = 'home'; //Nom du contrôleur par défaut

	//On teste si le paramètre controller existe et correspond à un contrôleur de la liste $controllers
	if(isset($_GET['controller']) && in_array($_GET['controller'], $controllers)){
	    $nom_controller = $_GET['controller'];
    } else {
	    $nom_controller = $controller_default;
    }

		//On détermine le nom de la classe du contrôleur
		$nom_classe = 'Controller_' . $nom_controller;

		//On détermine le nom du fichier contenant la définition du contrôleur
		$nom_fichier = 'Controllers/' .  $nom_classe . '.php';

		//Si le fichier existe
		if(file_exists($nom_fichier)){

			//On l'inclut et on instancie un objet de cette classe
			require_once($nom_fichier);
			$controller = new $nom_classe();
		}
		else{
		    exit("Error 404: not found!");
        }
?>
</body>
</html>
