<!DOCTYPE html>
<html style="overflow:hidden;">
    <head>

        <title>Maquette Barber-Life</title>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable='no'" name="viewport" />
        <link rel="icon" href="favicon.ico"/>

        <!--<link rel="stylesheet" href="css/index.css">-->
        <script src="Content/js/jquery.js"></script>
        <!--<script src="Content/js/script.js"></script>-->

        <!-- BootStrap -->
        <script src="Content/bootstrap-4.3.1-dist/js/bootstrap.js"></script>
        <link rel="stylesheet" href="Content/bootstrap-4.3.1-dist/css/bootstrap.css">

        <!-- Mustache -->
        <!--<script src="mustache.js-master/mustache.js"></script>-->

        <!-- FontAwesome -->
        <!-- <script src="https://kit.fontawesome.com/d43c869f70.js"></script> -->
        <script src="Content/fontawesome-free-5.10.2-web/js/all.js"></script>
        <link rel="stylesheet" href="Content/fontawesome-free-5.10.2-web/js/all.css"/>

        <!-- SweetAlert -->
        <!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script> -->
        <script src="Content/sweetalert2/package/dist/sweetalert.all.js"></script>
        <link rel="stylesheet" href="Content/fontawesome-free-5.10.2-web/js/sweetalert2.css"/>

    </head>
    <body style="height: 100vh;">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <a class="navbar-brand" href="index?controller=home&action=home">BarberLife</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index?controller=home&action=home">BarberLife Shop <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sécurité</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Aide
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Fonctionnement du site</a>
                <a class="dropdown-item" href="#">Comment s'inscrire en tant que coiffeur ?</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">FAQ</a>
              </div>
            </li>
          </ul>

          <ul class="navbar-nav mr-right">
            <li class="nav-item">
              <button type="button" class="btn btn-dark" id="openModalLangue"  data-toggle="modal" data-target="#modalLangue"><b><i class="fas fa-globe-europe"></i></b></button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-dark" id="openModalConnexion"  data-toggle="modal" data-target="#modalConnexion"><b><i class="fas fa-user"></i> connexion</b></button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-dark" id="openModalInscription"  data-toggle="modal" data-target="#modalInscription"><b><i class="fas fa-user-plus"></i> inscription</b></button>
            </li>
          </ul>

        </div>
      </nav>

        <div id="container" style="height: 100%;">
        <!-- affichage du corps de la page dynamiquement -->
