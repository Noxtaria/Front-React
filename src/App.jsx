import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> CoCoVoit</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ml-auto">
              <div className="btn-group">
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 p-3 rounded">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
