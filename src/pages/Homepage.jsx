import axios from "axios";
import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  // prende la lista film dal backend Express
  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/movies") 
      .then((resp) => {
        setMovies(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.error(err));
  };

  // esegue il fetch al mount
  useEffect(fetchMovies, []);

  return (
    <section style={{ maxWidth: 1080, margin: "0 auto", padding: 16 }}>
      <header style={{ textAlign: "center", marginBottom: 24 }}>
        <h1>Bitflix</h1>
        <h2><span>La tua videoteca digitale</span></h2>
      </header>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
      {movies.map((movie) => {
      const { id } = movie;
      return <MovieCard key={id} movie={movie} />;
      })}
      </div>
    </section>
  );
};

export default HomePage;