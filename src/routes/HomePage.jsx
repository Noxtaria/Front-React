import React, { useState } from 'react';

const HomePage = () => {
  const [depart, setDepart] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passager, setNombre] = useState('');

  const handleRecherche = () => {
    console.log('Départ:', depart);
    console.log('Destination:', destination);
    console.log('Date:', date);
    console.log('Passager:', passager);
  };

  return (
    <div className="container">
      <form className="form-inline d-flex">
        <div className="form-group mb-2">
          {/* <label htmlFor="depart" className="mr-2">Départ</label> */}
          <input
            type="text"
            className="form-control"
            id="depart"
            placeholder="Départ"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          {/* <label htmlFor="destination" className="mr-2">Destination</label> */}
          <input
            type="text"
            className="form-control"
            id="destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          {/* <label htmlFor="date" className="mr-2">Date</label> */}
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          {/* <label htmlFor="passager" className="mr-2">Passager</label> */}
          <input
            type="number"
            className="form-control"
            id="passager"
            placeholder="Passager"
            value={passager}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary ml-2"
          onClick={handleRecherche}
        >
          Recherche
        </button>
      </form>
    </div>
  );
}

export default HomePage;
