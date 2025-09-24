import { Link } from "react-router-dom";

const MovieCard = ({ movie = null }) => {
  if (!movie) return null;

  const { id, title, image, director } = movie;

  return (
    <div className="card">
      <Link to={`/movies/${id}`} style={{ textDecoration:"none", display:"block" }}>
        {image && (
          <img src={image} alt={title} style={{ width:"100%", height:395, objectFit:"cover", gap:60 }} />
        )}
        <div style={{ padding:12 }}>
          <h2 style={{ margin:"0 0 6px", fontSize:18 }}>{title}</h2>
          <p style={{ margin:0, opacity:.8 }}>{director}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
