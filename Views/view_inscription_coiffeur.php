<div id="card-container" class="card my-5 mx-auto w-75 h-75 rounded-lg shadow-lg">
    <div class="card-header">
        <i class="fas fa-user-circle"></i> Connexion coiffeur
    </div>
    <div class="card-body overflow-auto">
        <form method="post" class="needs-validation" novalidate>
            <div class="form-group">
                <label for="login">Login</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="login"><i class="fas fa-user"></i></span>
                    </div>
                    <input name="login" type="text" class="form-control" id="login" aria-describedby="inputGroupPrepend"
                           required>
                </div>
            </div>

            <div class="form-group">
                <label for="mail">Mail</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="mail"><i class="fas fa-paper-plane"></i></span>
                    </div>
                    <input name="mail" type="email" class="form-control" id="mail" aria-describedby="inputGroupPrepend"
                           required>
                </div>
            </div>

            <div class="form-group">
                <label for="name">Nom de famille</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="name"><i class="fas fa-signature"></i></span>
                    </div>
                    <input name="name" type="text" class="form-control" id="name" aria-describedby="inputGroupPrepend"
                           required>
                </div>
            </div>

            <div class="form-group">
                <label for="firstname">Prénom</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="firstname"><i class="fas fa-signature"></i></span>
                    </div>
                    <input name="firstname" type="text" class="form-control" id="firstnam"
                           aria-describedby="inputGroupPrepend" required>
                </div>
            </div>

            <div class="form-group">
                <label for="password">Mot de passe</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="password"><i class="fas fa-unlock-alt"></i></span>
                    </div>
                    <input name="password" type="password" class="form-control" id="password"
                           aria-describedby="inputGroupPrepend" required>
                </div>
            </div>

            <div class="form-group">
                <label for="Cpassword">Confirmation du mot de passe</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="Cpassword"><i class="fas fa-unlock-alt"></i></span>
                    </div>
                    <input name="Cpassword" type="password" class="form-control" id="Cpassword"
                           aria-describedby="inputGroupPrepend" required>
                </div>
            </div>

            <div class="form-group">
                <label for="phone">Téléphone</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="phone"><i class="fas fa-mobile"></i></span>
                    </div>
                    <input name="phone" type="text" class="form-control" id="phone" aria-describedby="inputGroupPrepend"
                           required>
                </div>
            </div>

            <div class="form-group">
                <label for="adresse1">Adresse principale</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="adresse1"><i class="fas fa-map-marked-alt"></i></span>
                    </div>
                    <input name="adresse1" type="text" class="form-control" id="adresse1"
                           aria-describedby="inputGroupPrepend" required>
                </div>
            </div>

            <div class="form-group">
                <label for="adresse2">Adresse secondaire <span>(champ facultatif)</span></label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="adresse2"><i class="fas fa-map-marked-alt"></i></span>
                    </div>
                    <input name="adresse2" type="text" class="form-control" id="adresse2"
                           aria-describedby="inputGroupPrepend">
                </div>
            </div>

            <div class="form-check mb-2 mr-sm-2">
                <input name="rememberme" class="form-check-input" type="checkbox" id="rememberme">
                <label class="form-check-label" for="rememberme">
                    Se souvenir de moi
                </label>
            </div>

            <button class="btn btn-primary mx-auto" type="submit"><i class="fas fa-user-plus"></i> Connexion</button>
        </form>
    </div>
</div>