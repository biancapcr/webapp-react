import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found center-page" role="main" aria-labelledby="nf-title">
    <h1 id="nf-title">404 - Pagina non trovata</h1>
    <p className="muted">La pagina che stai cercando non esiste</p>

    <div className="to-home-btn">
      <Link
        to="/"
        className="btn square-btn-to-home"
        aria-label="Torna alla Home"
        title="Torna alla Home"
      >
        <i className="fa-solid fa-house" aria-hidden="true"></i>
        <span>Torna alla Home</span>
      </Link>
    </div>
  </div>
);

export default NotFound;