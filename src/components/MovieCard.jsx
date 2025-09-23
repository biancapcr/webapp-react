import { Link } from "react-router-dom";

const MovieCard = ({ movie = null }) => {
  if (!movie) return null;

  const { id, title, image, director } = movie;

  return (
    <div className="card">
      <Link to={`/movies/${id}`}>
        {image && <img className="card-cover" src={image} alt={title} />}
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-meta">{director}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
