import React, { useState } from 'react';


const CreateJourneyPage = () => {
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
      <form className="form-inline">
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            id="depart"
            placeholder="Départ"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
          />
        </div>
  
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            id="destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
  
        <div className="form-group mb-2">
          <input
            type="date"
            className="form-control form-control-lg"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
  
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control form-control-lg"
            id="passager"
            placeholder="Passager"
            value={passager}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
  
        <button
          type="button"
          className="btn btn-primary btn-lg ml-2"
          onClick={handleRecherche}
        >
          Créer
        </button>
      </form>
    </div>
  );
}

export default CreateJourneyPage