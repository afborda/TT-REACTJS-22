import "./style.css";

export const CardMovie = ({ movie }) => {
  return (
    <div className="container">
      <h1>{movie.movie}</h1>
      <img className="card-imagem" src={movie.avatar} alt={movie.movie} />
      <p>Disponibilidade: {movie.done ? "Livre" : "Indisponivel"}</p>
      <p>{movie.email}</p>
    </div>
  );
};
