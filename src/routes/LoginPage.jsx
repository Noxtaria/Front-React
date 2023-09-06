import React from 'react';

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me 
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Connexion
              </button>
            </form>

            <div className="d-flex justify-content-between mt-5">
              <a href="#">Mot de passe oublié ?</a>
              <a href="#">Vous n'avez pas de compte ?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
