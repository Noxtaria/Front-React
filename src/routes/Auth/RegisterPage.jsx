import React, { useState } from 'react';
import './RegisterPage.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 my-5">
            <h2 className="mb-4">Inscription</h2>
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Téléphone</label>
              <input
                type="text"
                className="form-control"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              S'enregistrer
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
