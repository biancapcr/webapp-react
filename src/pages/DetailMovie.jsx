import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import StarRating from "../components/StarRating.jsx";
import axios from "axios";

const DetailMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [totalMovies, setTotalMovies] = useState(0);

  const avg = useMemo(() => {
    if (!movie?.reviews?.length) return 0;
    const sum = movie.reviews.reduce((acc, r) => acc + (Number(r.vote) || 0), 0);
    return Math.round((sum / movie.reviews.length) * 2) / 2;
  }, [movie]);

  // funzione che recupera il film dal backend
  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((resp) => setMovie(resp.data))
      .catch((err) => console.error(err));
  };

// esegue il fetch al mount e quando cambia l'id
 useEffect(fetchMovie, [id]);
// utilizzo della lunghezza della lista per sapere qual è l'ultimo id
 useEffect(() => {
  axios
    .get("http://localhost:3000/movies")
    .then((resp) => {
      const arr = Array.isArray(resp.data) ? resp.data : [];
      setTotalMovies(arr.length);
    })
    .catch(() => setTotalMovies(0)); // in caso di errore, bottoni disabilitati
}, 
[]);
  // partenza dall'ID corrente, prova id+1; se supera N, torna a 1
  const goNextPage = () => {
    if (!totalMovies) return;
    const currentId = parseInt(id, 10);
    let nextId = currentId + 1;
    if (nextId > totalMovies) nextId = 1;
    navigate(`/movies/${nextId}`);
  };
  // parte dall'ID corrente, prova id-1; se scende sotto 1, va a N
  const goPrevPage = () => {
    if (!totalMovies) return;
    const currentId = parseInt(id, 10);
    let prevId = currentId - 1;
    if (prevId < 1) prevId = totalMovies;
    navigate(`/movies/${prevId}`);
  };

  if (!movie) return <p>Loading…</p>;

  return (
    <>
      <div 
      className="detail-frame"
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: 16,
        }}
      >
        <div 
        className="detail-card"
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <div style={{ flexShrink: 0 }}>
            {movie.image && (
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: 240, height: "auto", display: "block", borderRadius: 8 }}
              />
            )}
          </div>

          <div style={{ flex: 1 }}>
            <h1 style={{ marginTop: 0 }}>{movie.title}</h1>
                <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "6px 0 10px" }}>
                  <StarRating value={avg} size="1.2rem" />
                  <span style={{ color: "#a3acb9" }}>
                    {avg ? `${avg}/5` : "Nessuna valutazione"}
                    {movie.reviews?.length ? ` • ${movie.reviews.length} recensioni` : ""}
                    </span>
                    </div>
            <p className="meta-row">
              <span className="meta-label">Genere:</span>
              <span className="meta-value">{movie.genre}</span>
              </p>
              <p className="meta-row">
                <span className="meta-label">Anno:</span>
                <span className="meta-value">{movie.release_year}</span>
                </p>
                <p className="meta-row">
                  <span className="meta-label">Regia:</span>
                  <span className="meta-value">{movie.director}</span>
                  </p>
                  {Array.isArray(movie.reviews) && movie.reviews.length > 0 && (
                    <section className="reviews">
                      <h3 className="reviews-title">Recensioni</h3>
                      <ul className="reviews-list">
                        {movie.reviews.map((r) => (
                          <li key={r.id} className="review-item">
                            <div className="review-head">
                              <span className="review-author">{r.name}</span>
                              <span className="review-vote">({r.vote}/5)</span>
                              </div>
                              <p className="review-text">{r.text}</p>
                              </li>
                            ))}
                            </ul>
                            </section>
                          )}
                          </div>
                          </div>
                          <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {/* --- nav prev/text ---*/}
                            <div className="nav-row">
                              <button
                              type="button"
                              className="btn nav-btn prev"
                              onClick={goPrevPage}
                              disabled={!totalMovies}
                              >
                                 Precedente
                                </button>

                                {/* bottone home */}
                                <Link to="/" className="back-link">
                                ← Torna alla Home
                                </Link>
                                <button
                                type="button"
                                className="btn nav-btn next"
                                onClick={goNextPage}
                                disabled={!totalMovies}
                                >
                                  Successivo
                                  </button>
                                  </div>
                                  </div>
                                  </div>
                            </>
                            );
                          };

export default DetailMovie;