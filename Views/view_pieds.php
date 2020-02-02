
        </div>
        <footer id="footer" class="fixed-bottom">
            <nav aria-label="breadcrumb" class="navbar navbar-dark bg-dark" id="footer">
                <ol class="breadcrumb align-middle">
                    <?=url();?>
                </ol>
            </nav>
        </footer>

        <!-- *** Modals BootStrap *** -->

        <!-- Modal du bouton Réglages -->
        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content" id="modalContent">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle"><i class="fas fa-cog"></i> Réglages</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="navbar-brand input-group d-inline-flex">
                        <div class="input-group-prepend">
                            <label class="input-group-text" id="labelMode" for="mode"><i class="fas fa-adjust"></i></label>
                        </div>
                        <select class="custom-select" name="mode" id="mode">
                            <option value="clair">Clair</option>
                            <option value="sombre">Sombre</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="closeModal" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                </div>
            </div>
            </div>
      </div>

      <!-- Modal du bouton Langage -->
      <div class="modal fade" id="modalLangue" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content" id="modalContent">
              <div class="modal-header">
                  <h5 class="modal-title" id="modalTitle"><i class="fas fa-globe"></i> Langue</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">

                  <div class="navbar-brand input-group d-inline-flex">
                      <div class="input-group-prepend">
                          <label class="input-group-text" id="labelLangue" for="langue"><i class="fas fa-language"></i></label>
                      </div>
                      <select class="custom-select" name="langue" id="langue">
                          <option value="clair"><i class="fas fa-globe-americas"></i> English</option>
                          <option value="sombre"><i class="fas fa-globe-europe"></i> Français</option>
                      </select>
                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" id="closeModalLangue" class="btn btn-secondary" data-dismiss="modalLangue">Fermer</button>
              </div>
          </div>
          </div>
    </div>

    <!-- Modal du bouton Connexion -->
    <div class="modal fade" id="modalConnexion" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content" id="modalContent">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitle"><i class="fas fa-cog"></i> Connexion</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="d-flex justify-content-around">
                    <div class="d-flex">
                    <a class="text-decoration-none" href="index.php?controller=authentification&action=connexion_coiffeur">
                        <blockquote class="blockquote text-center">
                            <p class="mb-0"><i class="fas fa-cut"></i> Connexion coiffeur</p>
                            <hr/>
                            <footer class="blockquote-footer">Accédez à toutes les informations nécessaires pour réussir sur la route.</cite></footer>
                        </blockquote>
                    </a>
                    </div>
                    <div class="d-flex">
                    <a class="text-decoration-none" href="index.php?controller=authentification&action=connexion_client">
                        <blockquote class="blockquote text-center">
                            <p class="mb-0"><i class="far fa-user-circle"></i> Connexion client</p>
                            <hr/>
                            <footer class="blockquote-footer">Gérez vos options de paiement, consultez l'historique de vos courses et bien plus.</cite></footer>
                        </blockquote>
                    </a>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" id="closeModalConnexion" class="btn btn-secondary" data-dismiss="modalConnexion">Fermer</button>
            </div>
        </div>
        </div>
  </div>

  <!-- Modal du bouton Inscription -->
  <div class="modal fade" id="modalInscription" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
      <div class="modal-content" id="modalContent">
          <div class="modal-header">
              <h5 class="modal-title" id="modalTitle"><i class="fas fa-cog"></i> Inscription</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">

              <div class="d-flex justify-content-around">
                  <div class="d-flex">
                      <a class="text-decoration-none" href="index.php?controller=authentification&action=inscription_coiffeur">
                          <blockquote class="blockquote text-center">
                              <p class="mb-0"><i class="fas fa-cut"></i> Devenez coiffeur</p>
                              <hr/>

                          </blockquote>
                      </a>
                  </div>
                  <div class="d-flex">
                      <a class="text-decoration-none" href="index.php?controller=authentification&action=inscription_client">
                          <blockquote class="blockquote text-center">
                              <p class="mb-0"><i class="far fa-user-circle"></i> Faites vous coiffer à domicile</p>
                              <hr/>

                          </blockquote>
                      </a>
                  </div>
              </div>

          </div>
          <div class="modal-footer">
              <button type="button" id="closeModalInscription" class="btn btn-secondary" data-dismiss="modalInscription">Fermer</button>
          </div>
      </div>
      </div>
</div>

    </body>
    <script src="Content/js/script.js"></script>
</html>
