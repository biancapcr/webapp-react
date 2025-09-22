import { Link } from "react-router-dom";

const MovieCard = ({ movie = null }) => {
  if (!movie) return null; 

  const { id, title, image, director } = movie;

  return (
    <div style={{ border:"1px solid #eee", borderRadius:12, overflow:"hidden" }}>
      <Link to={`/movies/${id}`} style={{ color:"inherit", textDecoration:"none", display:"block" }}>
        {image && (
          <img src={image} alt={title} style={{ width:"100%", height:320, objectFit:"cover" }} />
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