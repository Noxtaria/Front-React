import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Connexion</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email :</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password :</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-check">
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
        <div className="login-links">
          <a href="#" className="password-link">Mot de passe oublié ?</a>
          <a href="#" className="signup-link">Vous n'avez pas de compte ?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
