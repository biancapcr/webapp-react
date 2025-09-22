import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // funzione che recupera il film dal backend
  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((resp) => setMovie(resp.data))
      .catch((err) => console.error(err));
  };

  // esegue il fetch al mount e quando cambia l'id
  useEffect(fetchMovie, [id]);

  if (!movie) return <p>Loading…</p>;

  return (
    <>
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: 16,
        }}
      >
        <div
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
                style={{ width: 260, height: "auto", display: "block", borderRadius: 8 }}
              />
            )}
          </div>

          <div style={{ flex: 1 }}>
            <h1 style={{ marginTop: 0 }}>{movie.title}</h1>
            <p>
              <strong>Genere:</strong> {movie.genre}
            </p>
            <p>
              <strong>Anno:</strong> {movie.release_year}
            </p>
            <p>
              <strong>Regia:</strong> {movie.director}
            </p>
            <p>
              <em>Riassunto</em>:
              <span style={{ display: "block", marginTop: 6 }}>{movie.abstract}</span>
            </p>

            {Array.isArray(movie.reviews) && movie.reviews.length > 0 && (
              <section style={{ marginTop: 16 }}>
                <h3 style={{ marginBottom: 8 }}>Recensioni</h3>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {movie.reviews.map((r) => (
                    <li key={r.id}>
                      <strong>{r.name}</strong> ({r.vote}/5): {r.text}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <Link to="/" style={{ textDecoration: "none", padding: "8px 12px", border: "1px solid #ddd", borderRadius: 8 }}>
            ← Torna alla Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;