<?php

/**
 * Fonction échappant les caractères html dans $message
 * @param  string $message chaîne à échapper
 * @return string          chaîne échappée
 */

/**
 * @param $message
 * @return string
 */
function e($message){
	return htmlspecialchars($message, ENT_QUOTES);
}

/**
 * @return string
 */
function url(){
	$coupure1=explode("=",$_SERVER["REQUEST_URI"]);
	$chemin = "<li class='breadcrumb-item'><a href='index.php'>";
	if(isset($coupure1[2])){
		$url = $chemin."Home</a></li> <li class='breadcrumb-item active' aria-current='page'>". $coupure1[2] ."</li>";
	} else{
		$url = $chemin. "Home</a></li>";
	}
	
	return $url;
}

?>
