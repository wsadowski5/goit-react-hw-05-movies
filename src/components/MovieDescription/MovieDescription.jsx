import css from './MovieDescription.module.css'



export const MovieDescription = ({ movieData }) => {
  return (
    <div className={css.container}>
      {movieData.poster_path && (
        <div>
          <img
          className={css.image}
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt={`${movieData.original_title} poster`}
            height='400'
          />
        </div>
      )}

      <div>
        <h2>{movieData.title} </h2>
        <p>User Score: {movieData.vote_average}</p>
        <h3>Ovierviwe:</h3>
        <p>{movieData.overview}</p>
        <h4>Genres:</h4>
        <ul className={css.genres}>
          {movieData.genres &&
            movieData.genres.map(genre => <li className={css.genre}key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </div>
  );
};
