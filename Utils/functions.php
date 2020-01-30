<?php

/**
 * Fonction échappant les caractères html dans $message
 * @param  string $message chaîne à échapper
 * @return string          chaîne échappée
 */
 
function e($message){
	return htmlspecialchars($message, ENT_QUOTES);
}

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
