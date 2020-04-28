
    <div id="card-container" class="card my-5 mx-auto h-75 w-75 rounded-lg shadow-lg">
        <div class="card-header">
            <i class="fas fa-cut"></i> Connexion coiffeur
        </div>
        <div class="card-body">
            <form method="post" class="needs-validation" novalidate>
                <div class="form-group">
                    <label for="login">Login ou E-mail</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="login"><i class="fas fa-user-circle"></i></span>
                        </div>
                        <input name="login" type="text" class="form-control" id="login" aria-describedby="inputGroupPrepend" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="password"><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input name="password" type="password" class="form-control" id="password" aria-describedby="inputGroupPrepend" required>
                    </div>
                </div>
                <button class="btn btn-primary mx-auto" type="submit">Connexion</button>
            </form>
        </div>
    </div>